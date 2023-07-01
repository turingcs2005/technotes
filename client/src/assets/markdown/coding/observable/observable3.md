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

The official [rxjs guide](https://rxjs.dev/guide/Observable) describes Observables as follows:
> <div class="quote">Observables are created using new Observable or a creation operator, are subscribed to with an Observer, execute to deliver next/error/complete notifications to the Observer, and their execution may be disposed.</div>
___

## 3.1 Creating Observables
Using the restaurant meal example, 
- An Observer is like a restaurant serving food
- An observer (or subscriber) is like a customer consuming food.

### 3.1.1 Creating Observables using creation operators
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

### 3.1.2 Creating Observables using constructor
```typescript
// Observable constructor
// 1. values 1, 2, 3 are emitted synchronously; 
// 2. wait a second
// 3. emit value 4 and a completion notification 
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
___

## 3.2 The Observable() constructor
### 3.2.1 The Subscribe() function
From the code above, we can see:
- The Observable() constructor Takes one function argument, <span class="emphasize">subscribe()</span> (in our example, an arrow function without a name).
  - subscribe() takes a single object as argument, a <span class="emphasize">subscriber</span>.
  - subscribe() can throw errors (exception handling using try/catch).
  - Code in subscribe() are executed synchronous or asynchronously. (setTimeout() function)

Based on the behavior of the subscribe() function, you can see that an Observable object is primarily concerned with three things:
- What notification to emit. An Observable can 
  - emit values via multiple next() notifications 🍷 🐙 🐟 🍰
  - throw errors 💩
  - emit a complete() notification at the end 👌
- If it is a 'next' notification, what value to emit.
- At what time to emit these values/notifications. 🕥

### 3.2.2 The Subscriber object
Now let's take a look at subscriber, the single argument of subscribe() function. A subscriber is an Observer, as it implements the <span class="emphasize">Observer</span> interface. (A subscriber has additional capabilities not defined by the Observer interface.)
- A subscriber has 3 methods: next(), error(), and complete().
  - The next() method can be invoked multiple times, synchronously or asynchronously, with an argument.
  - The error() method is invoked when an error is thrown.
  - The compelte() method is always invoked at the end. Any code after complete() are ignored.<br>
