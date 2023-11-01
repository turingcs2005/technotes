# Observables

## 1. Overview

The official [rxjs guide](https://rxjs.dev/guide/Observable) describes Observables as follows:
> *Observables are created using new Observable or a creation operator, are subscribed to with an Observer, execute to deliver next/error/complete notifications to the Observer, and their execution may be disposed.*

An Observable is an instance of the Observable class:

- An Observable emits a stream of values, just like a function which returns a single value.
- Value count can be 0 (nothing is emitted), 1 (like a Promise), or many. Observable obviates the need for Promise.
- Values can be emitted synchronously, asynchronously, or a mix of the two.
- An Observable is "read-only": values emitted can not be altered. Values received by subscribers are the same.
- Subscribing to an Observable is like invoking a function call. Each subscription triggers one call, which in turn emits a value stream.

We will use an example to illustrate the ideal. A fast-food restaurant offers only one meal package:

1. a beer 🍺
2. a burger 🍔
3. fries 🍟

- Each customer is served the same food items.
- Customers are not allowed to customize their orders. (read-only)
- Each time a customer orders food, a distinct meal package (with the same food items) is delivered.

## 2. Creating Observables using creation operators

By convention, an Observable name ends with a $.

```typescript
/* an Observable object can be created with operators */
import {  of, from, interval, timer } from 'rxjs';

// 1. emit values 1, 2, 3, 4 synchronously, then complete
const obs1$ = of(1, 2, 3, 4);   
// 2. same as 1 above
const obs2$ = from([1, 2, 3, 4]);

// 3. emit 0, 1, 2... asynchronously every second
const obs3$ = interval(1000); 
// 4. same as 3 above: wait 1 second, then emit a number every second
const obs4$ = timer(1000, 1000);
```

## 3. Creating Observables using constructor

```typescript
// Observable constructor
import { Observable } from 'rxjs';

const obs$ = new Observable((subscriber) => {
  try {
    // wine (beverage) is served synchronously
    subscriber.next("🍷");     
    
    // octopus (appetizer) is served synchronously
    subscriber.next("🐙");     

    // 🕥  fish (main course) is served after 1 second
    setTimeout(() => {
      subscriber.next("🐟");   
    }, 1000);
    
    // 🕥 cake (dissert) is served after 2 seconds
    setTimeout(() => {
      subscriber.next("🍰");   
      subscriber.complete();   // 👌 order complete
    }, 2000);
  } catch (err) {
    subscriber.error(err);
  }
});

// invoke Observable
let subscription = obs$.subscribe( (v) => console.log(v) );
// subscription.unsubscribe();  
// if unsubscribe now, 🐟 or 🍰 will never be served

// output:
// 🍷 (sync)
// 🐙 (sync)
// ... (wait 1 second)
// 🐟 (async)
// ... (wait another second)
// 🍰 (async)
```
