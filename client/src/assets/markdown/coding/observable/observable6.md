<style>
  .quote {
      font-style italic;
      color: navy;
      background-color: beige;
      border-radius: 10px;
      padding: 30px 30px;v => {
  console.log(v);
  }

	table, th, td {
		border: 1px solid black;
        text-align: left;
	}

	table {
		border-collapse: collapse;;
	}

	.darkgreen {
		color: darkgreen;
	}

	th, td {
		padding: 10px;
		width: 80px;
	}

	.navy {
		background-color: navy;
		color: white;
		font-weight: bold;
	}

	.purple {
		color: purple;
	}

	.darkred {
		background-color: darkred;
		color: white;
		font-weight: bold;
	}

  .emphasize {
      color: darkred;
      font-weight: bold;
  }

	.link {
		cursor: pointer;
		text-decoration: none;
		font-weight: bold;
	}
</style>

<div class="quote">Operators are functions. RxJS is mostly useful for its operators, even though the Observable is the foundation. Operators are the essential pieces that allow complex asynchronous code to be easily composed in a declarative manner.</div>
<br>

## 6.1 Creation Operators, Pipeable Operators and Pipeable Operator Factory

### 6.1.1 Creation operators
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

### 6.1.2  pipe operator and pipeable operators
A Pipeable Operator is a function that takes an Observable as its input and returns another Observable. Multiple pipeable operators are composed by a <span class="emphasize">pipe</span> operator, as nested function calls are hard to read. In the example below, <span class="emphasize">take</span> and <span class="emphasize">map</span>, two pipeable operators, are composed by a pipe operator.

```typescript
// piping
import { pipe, take, map } from 'rxjs';

const food = ["🍷", "🐙", "🐟", "🍰"];

interval(1000).pipe(    // take an observable for processing
    take(food.length),  // keep only the first 4 numbers {0, 1, 2, 3}
    map( i => food[i] ) // return food item by index
);
```

### 6.1.3 pipeable operator factory
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

## 6.2 Advanced operators
When an Observable emits Observables instead of ordinary values, it is a higher-order Observable. Typically, you flatten a higher-order Observable to a lower-order Observable using operators.

### 6.2.1 concat, concatAll and concatMap
- <span class="emphasize">concat</span>: concatenate multiple Observables by sequentially emitting their values
```typescript
// concatenate 2 observables 
const obs1$ = of(1, 2, 3);
const obs2$ = of(4, 5, 6);
const obs3$ = concat(obs1$, obs2$);
obs3$.subscribe( (v) => {console.log(v)} );
// output
// 1, 2, 3, 4, 5, 6

```

- <span class="emphasize">concatAll</span>: similar to concat, except that it concat observables instead of values
```typescript
// an Observable emitting URL strings, which links to files
const urlObservable = of(url1, url2, url3);

// a higher-order Observable flattened by concatAll() operator
const fileObservable = urlObservable.pipe(
    map(url => http.get(url)),  // map() + concatAll() can be replaced by concatMap()
    concatAll()
);
```

- <span class="emphasize">concatMap</span>: map() + concatAll()

On concat(), concatAll(), and concatMap() operators:
- concatAll() subscribes to the inner Observables (for files) sequentially, i.e. it subscribes to the first Observable and waits for it to complete before subscribing to the next emitted Observable. This ensures that the values emitted by the inner Observables (books) are in the same order as the outer Observables (URLs) received.
- concatMap() combines the functionality of both map() and concatAll(), and hence is a shorthand for them.
- concat operations take the most amount of time due to their sequential nature.
- use concat operations when order matters.
💙 💚 🧡 &rarr; 📘 📗 📙

### 6.2.2 merge, mergeAll and mergeMap
- <span class="emphasize">merge</span>: concurrently emits all values from every given input Observable.
- <span class="emphasize">mergeAll</span>: similar to merge, except that it merges observables instead of values

on merge(), mergeAll(), and mergeMap():
- fastest execution time as everything happens asynchronously.
- use merge when order doesn't matter.

### 6.2.3 switchAll and switchMap
- <span class="emphasize">switchAll</span>: flattens a higher-order Observable into a first-order Observable producing values only from the most recent observable stream.
- <span class="emphasize">switchMap</span>: map() + switchAll()

on switchAll() and switchMap():
- Arrival of a new Observable obviates the previous Observable. The previous Observable is unsubscribed.
- Use switch when only the most recent Observable matters.

For example: a user clicks on policy 1. Then she changes her mind and clicks on policy 2. It doesn't make sense to continue to make API calls to get building information, hurricane risk index, etc. for policy 1 as it is no longer needed. Terminate policy subscription (and child subscriptions) and subscribe to policy 2 Observable instead.

