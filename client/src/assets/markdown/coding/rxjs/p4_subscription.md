# Subscription

An object of Subscription class is returned by invoking the subscribe() method on an Observable. A Subscription represents a connection between an Observable and an Observer. It provides 3 methods for subscription management:

- unsubscribe(): cancel subscription and release resources.
- add(childSubscription): add a child subscription. If a parent subscription unsubscribes, so does the child.
- remove(childSubscription): remove a previously-added child subscription.

```typescript
// canceling a subscription   
import { interval, take, pipe, map } from 'rxjs';
const food = ["🍷", "🐙", "🐟", "🍰"];

// interval(1000) emits 0, 1, 2, ... every 1 second
let subscription = interval(1000).pipe(   
    take(food.length),  // convert an infinite series to just the first 4 numbers: 0, 1, 2, 3
    map( i => food[i] ) // convert 0, 1, 2, 3 to food item: "🍷", "🐙", "🐟", "🍰"
).subscribe( (v) => console.log(v) );

setTimeout( () => {
    subscription.unsubscribe();    
}, 2500);

// output
// 🍷
// 🐙

// Explanation:
// 🐟 and 🍰 are not emitted because observer already unsubscribed

```

```typescript
// adding/removing child subscription 
import { interval, take, pipe, map, timer } from 'rxjs';
const parentBeverages = ["🍷", "🍹", "🍺", "🍶"];
const childBeverages = ["🥛", "🧃", "🥥", "🍵"];

let parentSubscription = interval(1000).pipe(
    take(parentBeverages.length),  
    map( i => parentBeverages[i] ) 
).subscribe( (v) => console.log(v) );

let childSubscription = timer(1500, 1000).pipe(  
    take(childBeverages.length),  
    map( i => childBeverages[i] ) 
).subscribe( (v) => console.log(v) );

parentSubscription.add(childSubscription);
// You can remove childSubscription before parentSubscription unsubscribes

setTimeout( () => {
    parentSubscription.unsubscribe();    
}, 2400);

// output
// 🍷
// 🥛
// 🍹

// Explanation:
// At 1 second, wine is emitted (parent subscription)
// At 1.5 second, milk is emitted (child subscription)
// At 2 second, cocktail is emitted (parent subscription)
// At 2.4 second, parent unsubscribes, causing child to unsubscribe as well.
// Since both the parent and the child have unsubscribed, no more beverages are emitted.
```

You can add multiple child Subscriptions to a single parent Subscription and unsubscribe the whole family altogether by unsubscribing the parent.
