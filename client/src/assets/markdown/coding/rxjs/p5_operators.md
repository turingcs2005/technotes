# Operators

>*Operators are functions. RxJS is mostly useful for its operators, even though the Observable is the foundation. Operators are the essential pieces that allow complex asynchronous code to be easily composed in a declarative manner.*

## 1. Creation Operators, Pipeable Operators and Pipeable Operator Factory

### 1.1 Creation operators

A Creation Operator can be called as standalone functions to create a new Observable. We have already seen the following operators at work in previous sections:

- of(x1, x2...): emit values synchronously 
- from([x1, x2, ...]): emit array elements synchronously
- interval(scheduler): emit 0, 1, 2... asynchronously
- timer(due, scheduler): emit 0, 1, 2... asynchronously with an initial delay

```typescript
/* an Observable object can be created with operators */
import { of, from, interval, timer } from 'rxjs';

// 1. emit values 1, 2, 3, 4 synchronously, then complete
const obs1$ = of(1, 2, 3, 4);   
// 2. same as 1 above
const obs2$ = from([1, 2, 3, 4]);

// 3. emit 0, 1, 2... asynchronously every second
const obs3$ = interval(1000); 
// 4. same as 3 above: wait 1 second, then emit a number every second
const obs4$ = timer(1000, 1000);
```

### 1.2  Pipe operator and pipeable operators

A Pipeable Operator is a function that takes an Observable as its input and returns another Observable. Multiple pipeable operators are composed by a *pipe* operator. In the example below, *take* and *map*, two pipeable operators, are composed by a pipe operator.

```typescript
// piping
import { pipe, take, map } from 'rxjs';

const food = ["🍷", "🐙", "🐟", "🍰"];

interval(1000).pipe(
    take(food.length),  // keep only the first 4 numbers: 0, 1, 2, 3
    map( i => food[i] ) // return food items
);
```

### 1.3 Pipeable operator factory

A Pipeable Operator Factory is a function that can take parameters to set the context and return a Pipeable Operator.

```typescript
// building a custom pipeable operator
// a pipeable operator accepts an observable and returns a new observable
import { Observable, from, interval, take, map } from 'rxjs';
const customPowerPipe = (n: number) => map( (x: number) => Math.pow(x, n) );

const obs$ = from([1, 2, 3, 4]);
obs$.pipe(
    customPowerPipe(3)
).subscribe(
    (v) => { console.log(v) }
);

// output
// 1, 8, 27, 64
```

___

## 2. Advanced operators

When an Observable emits Observables instead of ordinary values, it is a higher-order Observable. Typically, you flatten a higher-order Observable to a lower-order Observable using operators.

### 2.1 concat, concatAll and concatMap

- concat: concatenate ouptuts of multiple observables sequentially. The concatenated observable emits values of the first Observable before emitting values of the next Observable to ensure that the emitted values are in order.

```typescript
// concatenate 2 observables 
const obs1$ = of(1, 2, 3);
const obs2$ = of(4, 5, 6);
const obs3$ = concat(obs1$, obs2$);
obs3$.subscribe( (v) => {console.log(v)} );
// output
// 1, 2, 3, 4, 5, 6

```

- concatAll: similar to concat, except that it concatenates observables instead of values.

In the example below, the emitted values themselves are observables (returned by http GET requests).

```typescript
// an Observable emitting URL strings, which links to files
const urlObservable = of(url1, url2, url3);

// a higher-order Observable flattened by concatAll() operator
const fileObservable = urlObservable.pipe(
    map(url => http.get(url)),  // map() + concatAll() can be replaced by concatMap()
    concatAll()
);
```

- concatMap: map() + concatAll()

On concat(), concatAll(), and concatMap() operators:

- concatAll() subscribes to the inner Observables sequentially, i.e. it subscribes to the first Observable and waits for it to complete before subscribing to the next emitted Observable. This ensures that the values emitted are in the same order as the Observables received.
- concatMap() combines the functionality of both map() and concatAll(), and hence is a shorthand.
- use concat operations when order matters.
💙 💚 🧡 &rarr; 📘 📗 📙

### 2.2 merge, mergeAll and mergeMap

Similar to concat, except that order doesn't matter.

- merge: concurrently emits all values from every given input Observable.
- mergeAll: similar to merge, except that it merges observables instead of values

on merge(), mergeAll(), and mergeMap():

- fastest execution time as everything happens asynchronously.
- use merge when order doesn't matter.

### 2.3 switchAll and switchMap

- switchAll: subscribes to a source that is an observable of observables, also known as a "higher-order observable". It subscribes to the most recently provided "inner observable" emitted by the source, unsubscribing from any previously subscribed to inner observable, such that only the most recent inner observable may be subscribed to at any point in time. The resulting observable returned by switchAll will only complete if the source observable completes, and any currently subscribed to inner observable also has completed, if there are any.
- switchMap: map() + switchAll()

on switchAll() and switchMap():

- Arrival of a new Observable obviates the previous Observable. The previous Observable is unsubscribed.
- Use switch when only the most recent Observable matters.
