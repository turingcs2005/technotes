# Notes on TypeScript Decorators

You see decorators 24/7 in Angular. Components (@component), services (@Injectable), modules (@NgModule) are all decorated TypeScript classes. Some class properties are also decorated (@Input, @Output). 

## 1. What is a decorator?
- A decorator is a function that modifies a declaration. For example: if a undecorated TypeScript class is a rifle, a class decorator is a scope. A scope converts a rifle into a sniper rifle, making the rifle much more powerful.
- Decorator syntax: <mark>@DECORATOR DECORATED</mark>, where 
	- DECORATOR: evaluates to a function.
	- DECORATED: **declaration** of one of the following:
		- class
		- method
		- accessor (getter/setter)
		- property
		- parameter
- Decorators are called at runtime. This makes decorators flexible and dynamic.
- In practice, most decorators are returned by a decorator factory (a function that returns a decorator&mdash;the latter is also a function). A decorator factory allows a user to customize decorators. Decorator syntax (with a decorator factory) is <mark>@DECORATOR_FACTORY(ARGUMENTS) DECORATED</mark>. For example:
```typescript
@component(
	selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
) HomeComponent {
	// class declaration
}
```
In the code above, component is a decorator factory, which takes 3 arguments: 
1. selector: a string, which is enclosed between angled brackets and appears in a template (see below). It tells Angular to instantiate a component class by invoking its constructor.
2. templateUrl: a string pointing to an html template.
3. styleUrls: an array of stylesheets to be applied to the component template.
- Decorator is a phase 2 (draft) proposal to JavaScript. To use decorators in TypeScript, edit your tsconfig.json file:
```json
"experimentalDecorators": true
```

## 2. Why use decorators?
Decorators make source code shorter and cleaner. Using class decorator as an example: an Angular app uses many different components such as home, topbar, sidebar, etc.; plus many feature modules, each housing multiple components. A component decorator can change a TypeScript class into a component class using only a short function call with 3 arguments.

Think of both classes and decorators as factories:
- A class is a factory for objects: when a class constructor is invoked, a custom-built object is instantiated.
- A decorator is a factory for the decorated: when a component decorator is invoked, a custom-built component is instantiated.
