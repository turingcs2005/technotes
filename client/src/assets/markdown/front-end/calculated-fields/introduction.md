The need to display calculated fields on the front end is ubiquitous in Angular apps. 

- A Reactive Form accepts data from a user; the form can can also be populated via database calls or API calls.
- Some values are calculated from the form fields and displayed on the UI.
- Changes to calculated fields (e.g. a user selects a different value from a dropdown menu) need to be reflected on the UI.

The challenge lies in the fact that Angular component is not intelligent enough to figure out what value changes affect which UI artifacts. An UI event, even one that has zero impact on calculated values or displayed values (e.g. mouseover tip), will trigger a change detection cycle. All functions (including getters) will be invoked blindly to recalculate values. Even functions defined outside of a component&mdash;for example functions defined in a service or a standalone TypeScript file, will be reinvoked at each change detection cycle. 😱 This is not only inefficient but also greatly increases debugging difficulties. 

Our solution is to avoid function calls altogether, and render calculated values via pure pipes.

Another option is to adopt 'on-push' change detection strategy and write code to proactively trigger change detection for expected input changes. This strategy requires exessive coding and incurs high software maintenance cost.

