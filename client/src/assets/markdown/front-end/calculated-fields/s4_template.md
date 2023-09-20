```html
<form [formGroup]="intakeForm" (ngSubmit)="onSubmit()">
		<app-input label="Team Name" [control]="$any(intakeForm.controls['teamName'])" matTooltip="We are a group of lynx."></app-input> &nbsp; 
		<app-input label="Manager Name" [control]="$any(intakeForm.controls['managerName'])"></app-input> <br>

		<div>Players</div>
		<div formArrayName="players">
				<div *ngFor="let p of $any(intakeForm.controls['players']).controls; let i = index"
						[formGroupName]="i"
				>
						<app-input label="Player Name" [control]="$any(p.controls['playerName'])"></app-input> &nbsp;
						<app-input fmt="currency" label="Salary" [control]="$any(p.controls['salary'])"></app-input> <br>
				</div>
		</div>

		<div>Total player salary: {{ team.totalPlayerSalary|  currency: 'USD': 'symbol': '1.0-0' }} &nbsp; &nbsp;
						<button mat-mini-fab type="submit"><mat-icon>done</mat-icon></button>
		</div>
		<br>
</form>
```