An object of the Subscription class is returned by invoking the subscribe() method on an Observable. A Subscription represents a connection between an Observable and an Observer created by the subscribe() method. It provides 3 methods for subscription management:
- unsubscribe(): cancel subscription and release resources. 
- add(childSubscription): add a child subscription, is if a parent subscription unsubscribes, so does the child.
- remove(childSubscription): remove a previously-added child subscription, so if the parent unsubscribes, child is not affected. 

```typescript
// canceling a subscription   
import { interval, take, pipe, map } from 'rxjs';
const food = ["🍷", "🐙", "🐟", "🍰"];

// interval(1000) emits 0, 1, 2, ... every 1 second
let subscription = interval(1000).pipe(    // take an observable for processing
    take(food.length),  // keep only the first 4 numbers {0, 1, 2, 3}
    map( i => food[i] ) // return food item by index
).subscribe( (v) => console.log(v) );

setTimeout( () => {
    subscription.unsubscribe();    
}, 2500);

// output
// 🍷
// 🐙
```

```typescript
// adding/removing child subscription 
import { interval, take, pipe, map, timer } from 'rxjs';
const parentBeverages = ["🍷", "🍹", "🍺", "🍶"];
const childBeverages = ["🥛", "🧃", "🥥", "🍵"];

// interval(1000) emits 0, 1, 2, ... every 1 second
let parentSubscription = interval(1000).pipe(    // take an observable for processing
    take(parentBeverages.length),  
    map( i => parentBeverages[i] ) 
).subscribe( (v) => console.log(v) );

// timber(1500, 1000) emits 0, 1, 2, ... every 1 second, but wait 1.5 seconds before 0
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
```

You can add multiple child Subscriptions to a single parent Subscription and unsubscribe the whole family in one go.