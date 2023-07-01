The Observer interface defines from 0 up to 3 methods, all callback functions:
- next(v) ▶️: handles the next value emitted by the Observable.
- error(e) 💩: handles an error notification emitted by the Observable.
- complete() 👌: handles the completion notification emitted by the Observable.

Obviously, an Observer implements 0 methods is useless. A useful Observer can be defined in 1 of the 3 syntaxes below:
- Object literal definition using key-value 🔑-💵 pairs, where a key 🔑 &#8712; {"next", "error", "complete"} and a value 💵 is a function
```typescript
// key-value pairs (up to 3)
obs$.subscribe({
        next: (v) => console.log(v),
        error: (e) => console.log(e),
        complete: () => console.log('Done')
    }
);
```
- Object literal of up to 3 named functions 💵, where a function name &#8712; {"next", "error", "complete"}. Order does not matter.
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
- A single 'next' function 💵 (can be anonymous, which is the prefered syntax).
```typescript
// a single next() function
obs$.subscribe( v => {
    console.log(v);
});
```