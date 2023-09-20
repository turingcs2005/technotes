```typescript
import { Component } from '@angular/core';
import { FormFactoryService } from '../services/form-factory.service';

@Component({
  selector: 'app-calculated-fields',
  templateUrl: './calculated-fields.component.html',
  styleUrls: ['./calculated-fields.component.scss']
})
export class CalculatedFieldsComponent {

  intakeForm = this.formFactory.teamForm;
  team = this.formFactory.team;

  constructor(
    private formFactory: FormFactoryService
  ) {}

  onSubmit() {
    console.log('%c 👍 Form data are sent to the back end.', 'color: green');
  }

}
```