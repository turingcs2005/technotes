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

There are two types of objects in JavaScript that handles asynchronous operations: Promises and Observables. I will again use real-life analogies to illustrate the concepts.

Last summer, my family visited Iceland. 
- At the Glacial National Park, we stopped at a food truck for lunch, where 🐟 and 🍟 were ordered and served right away. 
- At the Great Geyser, we had lunch at a food court, where we ordered lamb 🐑 with other food items. A chef in full uniform prepared the food and served everything in one go. 
- Later that day, we had dinner at a hotel's full-service restaurant 🍴. Our order consisted of multiple items: beverages, appetizers, main courses and disserts, which were served over time.

Now let's compare these meals. 
<table>
    <tr>
        <th>Meal</th>
        <th>Service</th>
        <th>Item</th>
        <th>Analogy</th>
    </tr>
    <tr>
        <td>Food Truck 🚚</td>
        <td>Synchronous</td>
        <td>One</td>
        <td>Function</td>
    </tr>
    <tr>
        <td>Food Court 🐑</td>
        <td>Asynchronous</td>
        <td>One</td>
        <td>Promise</td>
    </tr>
    <tr>
        <td>Restaurant 🍴</td>
        <td>Asynchronous</td>
        <td>Stream</td>
        <td>Observable</td>
    </tr>
</table><br>

- A function is synchronous. It accepts arguments and return a single value.
- A Promise handles a single asynchronous event.
- An Observable can handle multiple asynchronous events.

While both Promises and Observables help us work with asynchronous functionalities, an Observable does everything a Promise does, plus a lot more. It can emit 0, 1 or any number of events either synchronously, asynchronously, or a mix of the two. <span class="emphasize">Modern JavaScript libraries such as Angular's HttpClient module have adopted Observable as the standard. We should also use Observables to handle asynchoronous operations.</span> The rxjs JavaScript library, a core subject of this tutorial, provides tools for working with Observables.