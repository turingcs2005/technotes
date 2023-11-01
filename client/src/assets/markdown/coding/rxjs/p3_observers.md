# Observers

> *An Observer is a consumer of values delivered by an Observable. Observers are simply a set of callbacks, one for each type of notification delivered by the Observable: next, error, and complete.*

The Observer interface defines 3 optional callback functions:

- next(v) ▶️: handles the next value emitted by the Observable.
- error(e) 💩: handles an error notification emitted by the Observable.
- complete() 👌: handles the completion notification emitted by the Observable.

An Observer missing at least one of the callbacks is partial. A partial Observer ignores notifications whose handlers are not defined. Obviously, an Observer implementing no callback is useless&mdash;it should implement at least 1 callback. 

There are 3 different syntaxes to create an Observer:

- Object literal of key-value pairs, where the keys are 'next', 'error' and 'complete' and the values are callback functions:

```typescript
// key-value pairs (up to 3)
obs$.subscribe({
        next: (v) => console.log(v),
        error: (e) => console.log(e),
        complete: () => console.log('Done')
    }
);
```

- Named functions, where functions names are 'next', 'error', and 'complete':

```typescript
// named functions (up to 3)
obs$.subscribe({
        next(v) {console.log(v)},
        error(e) {console.log(e)},
        complete() {
            console.log('Done');
        }
    }
);
```

- A single 'next' function:

```typescript
// a single function, which will be used as the 'next' callback function
obs$.subscribe( v => {
    console.log(v);
});
```
