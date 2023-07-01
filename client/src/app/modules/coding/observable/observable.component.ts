import { Component } from '@angular/core';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent {
  sections = [
    'Asynchronous architecture in JavaScript',
    'Observable is the current standard for asynchronous operations',
    'The Observable class',
    'The Observer interface',
    'The Subscription class',
  ]
}
