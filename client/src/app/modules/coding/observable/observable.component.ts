import { Component } from '@angular/core';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent {
  sections = [
    'Asynchronous architecture in JavaScript',
    'What is an observable?'
  ]
}
