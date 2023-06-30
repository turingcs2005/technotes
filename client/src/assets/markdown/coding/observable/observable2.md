<style>
    .quote {
        font-style italic;
        color: navy;
        background-color: beige;
        border-radius: 10px;
        padding: 30px 30px;
        width: 80%;
        margin: auto; /* center */
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

	.link {
		cursor: pointer;
		text-decoration: none;
		font-weight: bold;
	}
</style>

The official [rxjs guide](https://rxjs.dev/guide/observable) describes observables as follows:
> <div class="quote">Observables are created using new Observable or a creation operator, are subscribed to with an Observer, execute to deliver next/error/complete notifications to the Observer, and their execution may be disposed.</div>
___

### 1.1 Function, promise and observable
I will again use real-life analogies to explain these concepts. Last summer, my family visited Iceland. 
- At the Glacial National Park, we stopped at a food truck for lunch, where 🐟 and 🍟 were ordered and served right away. 
- At the Great Geyser, we had lunch at a food court, where we ordered lamb 🐑 with other food items. A chef in full uniform prepared the food and served everything in one go. 
- Later that day, we had dinner at a hotel's full-service restaurant 🍴. Our order consisted of multiple items: beverages, appetizers, main courses and disserts, which were served over time.

Now let's compare these meals. 
<table>
    <tr>
        <th>Service</th>
        <th>Time</th>
        <th>Item Bundle</th>
        <th>Arrival Time</th>
        <th>Analogy</th>
    </tr>
    <tr>
        <td>Food Truck</td>
        <td>Instant</td>
        <td>One</td>
        <td>One</td>
        <td>Function</td>
    </tr>
    <tr>
        <td>Food Court</td>
        <td>Wait</td>
        <td>One</td>
        <td>One</td>
        <td>Promise</td>
    </tr>
    <tr>
        <td>Restaurant</td>
        <td>Wait</td>
        <td>Multiple</td>
        <td>Multiple</td>
        <td>Observable</td>
    </tr>
</table><br>

- A function is synchronous. It accepts arguments and return a single value.
- A promise handles a single asynchronous event.
- An observable can handle multiple asynchronous events.

Though both promises and observables help us work with asynchronous functionalities, an observable does everything a promise does, plus a lot more. It can emit 0, 1 or any number of events either synchronously, asynchronously, or a mix of the two. Modern JavaScript libraries such as Angular's HttpClient module prefer observables to promises. We should use observables to handle asynchoronous operations in JavaScript. The rxjs JavaScript library, a core subject of this tutorial, provides tools for working with observables.
___

### 1.2 Observable, Observer and Subscriber


A lot of things are better demonstrated than explained. Below are a few code examples:
```typescript
// A synchronous observable emitting 4 values. 
const obs$ = of(1, 2, 3, 4);
obs$.subscribe( data => {
    console.log( data ** 2);
});
// output: 1, 4, 9, 16
```
A few observations:
- An observable can emit a sequence of events. In this example, 4 values are emitted.
- To invoke an observable and see its values, an observable needs to be subscribed. 
- A subscriber is a callback function that is invoked once for each emitted value.

