# Subjects

A Subject is a strange animal:

- The Subject class inherits from the Observable class &rarr; a Subject is an Observable.
- The Subject class also implements the Observer interface &rarr; a Subject is also an Observer.
- A Subject is a powreful and versatile construct serving multiple purposes.
- They are not used often in our apps, hence we will only provide a high-level overvierw of what they are for.
- Check out official rxjs documentation on code.

## 1. Subject

>*A subscriber will only get published values that were emitted after the subscription.*

A Subject is like live broadcasting. Think of the World Cup final between France and Argentina. The broadcast maintains a registry of subscribers. Every subscriber watches the same game. If a subscriber joins only at the beginning of the 2nd half and the score is already 1:1, the he doesn't get to see what he has already missed (first half scoring). By invoking the next() function, a Subject can emit new values.

## 2. BehaviorSubject

>*The last value is cached. A subscriber will get the latest value upon initial subscription.*

A BehaviorSubject holds only a single value. It has to be initalized with an inital value. By invoking the next() function, a BehaviorSubject can emit new values. Think of a chat app. Each time a user types a message, a BehaviorSubject invokes its next() function to refresh its cached value. Subscribers will get this new message.

## 3. ReplaySubject

>*It can cache up to a specified number of emissions. When it caches 1 value, it becomes a BehaviorSubject.*

