The official [rxjs guide](https://rxjs.dev/guide/Observable) describes Observables as follows:
> <div class="quote">Observables are created using new Observable or a creation operator, are subscribed to with an Observer, execute to deliver next/error/complete notifications to the Observer, and their execution may be disposed.</div>
___

Creating Observables
```typescript
/* an Observable object can be created 
via Observable() constructor or a creation operator */
import { Observable, of } from 'rxjs';

// of() operator: emitting values synchronously
// 1. values 1, 2, 3, 4 are emitted synchronously 
// 2. then a complete notification
const obs_sync$ = of(1, 2, 3, 4);  

// Observable constructor
// 1. values 1, 2, 3 are emitted synchronously; 
// 2. wait a second
// 3. emit value 4 and a completion notification 
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
From code above, we can see:
- The Observable() constructor Takes one function argument (in our example, an arrow function).
- The function takes a single object argument (Subscriber). 
- The Subscriber object implements 3 methods, next(), error(), and complete().
  - The next() method can be invoked multiple times, synchronously or asynchronously, with an argument.
  - The error() method is invoked when an error is thrown.
  - The compelte() method is always invoked at the end. Any code after complete() are ignored.<br>

Though the examples above do not throw any errors, a Subscriber can implement a 3rd method, error(). The error() method is invoked when the arrow function throws an error.

From the arrow function, you can see that an Observable object is primarily concerned with three things:
- What notification to emit. An Observable can 
  - emit values via multiple next() notifications 🍷 🐙 🐟 🍰
  - throw errors 💩
  - emit a complete() notification at the end 👌
- If it is a 'next' notification, what value to emit.
- At what time to emit these values/notifications. 🕥

But what is a Subscriber? A Subscriber is also known as an Observer&mdash;an object implementing the *Observer interface* (subject of the next section).
