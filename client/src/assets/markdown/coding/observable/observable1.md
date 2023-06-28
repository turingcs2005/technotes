## 1. What is an observable 🔭?
The official [rxjs guide](https://rxjs.dev/guide/observable) gives an excellent introduction to observables. Under 'Anatomy of an Observable' section are the following words:
> Observables are created using new Observable or a creation operator, are subscribed to with an Observer, execute to deliver next/error/complete notifications to the Observer, and their execution may be disposed. These four aspects are all encoded in an Observable instance, but some of these aspects are related to other types, like Observer and Subscription.

### 1.1 Functions, iterators, promises and observables: a real-life analogy
When my family visited Iceland last summer, we had different meals. 
- At the Glacial National Park, we stopped at a food truck for lunch, where 🐟 and 🍟 were ordered and served right away. 
- At the Great Geyser, we had lunch at a food court, where we ordered lamb 🐑 with other food items. A chef in full uniform prepared the food and served everything in one go. (After cutting the lamb, he even carefully arranged multiple food items in a plate for better presentation. I've found that in general, Europeans are more sophisticated than Americans.) 
- Later that day, we had dinner at a hotel's full-service restaurant 🍴. Our order consisted of multiple items: beverages, appetizers, main courses and disserts, which were served over time.

Now let's compare the meals. 
- The 🐟 and 🍟 were ready-made and served on the spot. This is like a function call, where you invoke a function and get a returned value synchronously.
- At the 🐟 and 🍟 food truck, had we made a second order immediately after the first order, food for the second order would have been served without delay. This is like an iterator (a JavaScript interface), where a sequence of values are returned synchronously.
- The food court 🐑 order took some time to prepare, but they arrived in one go. This is like a promise, where you get a single event at a later time (asynchronously). Upon arrival, that returned event is consumed by a callback function.
- Dinner items were ordered and served over time. This is like an observable, where multiple events are emitted over time (asynchronously). The sequence of values are consumed by a subscriber upon arrival one-by-one. 

### 1.2 Asynchronous architecture in JavaScript
In JavaScript, a lot of operations take time 🕥 to complete. For example:
- File upload takes time due to network speed.
- Most API calls takes time. 
    - Internet traffic takes time.
    - An API server may perform database operations.
- Some of Angular's [custom input validators](## "As of Angular 16, all Angular's built-in form validators are synchronous, i.e. instantaneous.") take time to execute. Examples are:
    - After a user enters an ID in a form field, Angular makes an API call to check whether that ID exists in database. 
    - City and ZIP code autofill/validation 🌍 takes time. Angular makes API calls to check:
         - If a city exists for a given state
         - If a ZIP code exists for that city.

A synchronous architecture, where the execution of each operation happens sequentially, is not efficient at handling such operations, as synchronous is a blocking architecture. Let's again use an analogy to illustrate the idea.

A waitress 👩 works at a full-service restaurant 🍴. 
- If she adopts a synchronous architecture to serve customers:
    1. The first customer 🧔‍♂️ comes in and orders a burger 🍔. 
    2. The waitress sends his order to the kitchen 🧑‍🍳.
    3. The waitress 👩 waits next to the customer 🧔‍♂️ until the burger 🍔 is ready.
    4. The waitress 👩 serves the burger 🍔.
    5. The waitress then goes to the second customer 👧.
- If she adopts a asynchronous architecture to serve customers:
    1. The first customer 🧔‍♂️ comes in and orders a burger 🍔. 
    2. The waitress sends his order to the kitchen 🧑‍🍳.
    3. The waitress then goes to the second customer 👧.
    4. When the burger 🍔 is ready, the waitress serves it to the first customer 🧔‍♂️.
    5. The waitress continues to serve other customers.

Needless to say, an asynchronous architecture is vastly superior 👍 to a synchronous one in this scenario, where meal preparation takes time.

> Asynchronous is a non-blocking architecture, so the execution of one task isn't dependent on another. Tasks can run simultaneously.

### 1.3 Observable: the new standard
Promises and observables help us work with asynchronous functionalities. A promise emits a single event; an observable does everything a promise does, plus a lot more. It can emit 0, 1 or any number of events either synchronously, asynchronously, or a mix of the two. Many JavaScript/TypeScript packages (including Angular's HttpClient module) are moving away from promises and into observables. As a result, **observable is our new standard** for handling asynchoronous functionalities in JavaScript.

A lot of things are better demonstrated than explained. Below are a few code examples:
```typescript
// A synchronous observable emitting 4 values. By convention, an observable name is postfixed with a $ symbol.
const obs$ = of(1, 2, 3, 4);
obs$.subscribe( data => {
    console.log( data ** 2);
});
// output: 1, 4, 9, 16
```
A few observations:
- An observable can emit a sequence of values. In this example, 4 values are emitted.
- To invoke an observable and see its values, an observable needs to be subscribed. 
- A subscriber is a callback function that is invoked once for each emitted value, using the value as argument.