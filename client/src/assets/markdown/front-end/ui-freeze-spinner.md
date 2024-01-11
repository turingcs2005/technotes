# UI freeze spinner

We often display a spinner during an async operation, e.g. retrieving data from a database or an API call. The spinner tells a user to wait.

When many UI artifacts are added synchronously (e.g. 30 building Form Groups are pushed to a Form Array), browser screen will freeze for a couple seconds. This behavior can confuse a user. A natural solution is to display a spinner on the screen with text 'adding buildings...'. However, code below will not work:

```typescript
showSpinner();

for(let i = 0; i < buildingCount; i++) {
	pushBuilding();  // push a building Form Group to buildings Form Array	
}

hideSpinner();
```

The reason is that the for loop is executed synchronously: those 30 buildings are pushed instantaneously. As a result, showSpinner() and hideSpinner() happen instantaneously.

In order to display a spinner while UI freezes due to a synchronous operation (e.g. adding 30 building Form Groups), use setTimeout() with 1 millisecond delay.

```typescript
showSpinner();

setTimeout( () => {
	for(let i = 0; i < buildingCount; i++) {
		pushBuilding();  // push a building Form Group to buildings Form Array	
	}
	hideSpinner();
}, 1);
```

The 1 millisecond delay is enough for Angular to display a spinner before UI freezes. The hideSpinner() is executed after 1 millisecond, but by then the UI is already frozen, so the spinner will not disappear. The spinner will disappear only after the array of buildings are rendered in UI, i.e. when the UI freeze ends.
