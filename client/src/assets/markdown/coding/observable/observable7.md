A Subject is a strange animal: 
- The Subject class inherits from the Observable class, and hence a Subject is an Observable.
- The Subject class also implements the Observer interface, and hence a Subject is also an Observer.
- A Subject is a powreful and versatile construct serving multiple purposes, among which multicasting, where multiple subscribers consume the same Observable.

## 7.1 Appending subscribers
You can invoke the subscribe() function on a Subject object to append subscribers, and pass a Subject to another Observable's subscribe() function as an Observer.
```typescript
import { Subject, of } from 'rxjs';

const subject = new Subject<number>();
subject.subscribe( v => console.log('subscriber 1:', v) );
subject.subscribe( v => console.log('subscriber 2:', v) );

of(1, 2, 3).subscribe(subject);

// output
// subscriber 1: 1
// subscriber 2: 1
// subscriber 1: 2
// subscriber 2: 2
// subscriber 1: 3
// subscriber 2: 3
```

For more advanced rxjs topics, feel free to check out the [official documentation](https://rxjs.dev/guide/overview).