<div class="quote">
An Observer is a consumer of values delivered by an Observable. Observers are simply a set of callbacks, one for each type of notification delivered by the Observable: next, error, and complete. 
</div>
<br>

The Observer interface defines from 0 up to 3 methods, all callback functions:
- next(v) ▶️: handles the next value emitted by the Observable.
- error(e) 💩: handles an error notification emitted by the Observable.
- complete() 👌: handles the completion notification emitted by the Observable.

An Observer missing at least one of the callbacks is partial. A partial Observer ignores notifications whose handlers are not defined. Obviously, an Observer implements 0 methods is useless. A useful Observer should define at least 1 callback function. There are 3 different syntaxes to create an Observer:
- Object literal using key-value 🔑-💵 pairs:
```typescript
// key-value pairs (up to 3)
obs$.subscribe({
        next: (v) => console.log(v),
        error: (e) => console.log(e),
        complete: () => console.log('Done')
    }
);
```
- Object literal using named functions 💵:
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
- A single 'next' function 💵 (arrow function preferred).
```typescript
// a single next() function
obs$.subscribe( v => {
    console.log(v);
});
```