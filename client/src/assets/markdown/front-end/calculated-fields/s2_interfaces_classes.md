Data structure should always come first when building an app.

Our strategy is to wrap a Reactive Form in a TypeScript class, where we use getters, setters and functions to manipulate form data and implement business logics, 

```typescript
import { FormControl, FormGroup, FormArray, Validators } from "@angular/forms";

export interface IPlayer {
    playerName: string | null,
    salary: number | null
}

// A wrapper class allows convenient access and manipulation of form controls and easy implementation of business logics
export class Player implements IPlayer {

    constructor(
        public playerForm: FormGroup
    ) { }

    get playerName(): string | null {
        return this.playerForm.controls['playerName'].value;
    }

    get salary(): number | null {
        return this.playerForm.controls['salary'].value;
    }

    set playerName(v: string | null) {
        this.playerForm.controls['playerName'].setValue(v);
    }

    set salary(v: number | null) {
        this.playerForm.controls['salary'].setValue(v);
    }

}

export interface ITeam {
    teamName: string | null,
    managerName: string | null,
    players: Player[] | null
}

export class Team implements ITeam {
    constructor(
        public teamForm: FormGroup
    ) { }

    get teamName(): string | null {
        return this.teamForm.controls['teamName'].value;
    }

    get managerName(): string | null {
        return this.teamForm.controls['managerName'].value;
    }

    get playerFormArray(): FormArray | null {
        return <FormArray>this.teamForm.controls['players'];
    }

    get playerSalary(): number[] | null {
        return this.playerFormArray.controls.map(x => Number(x.get('salary').value));
    }

    get totalPlayerSalary(): number {
        return this.playerSalary.reduce( (a, b) => a + b ); 
    }

    get players(){
        return this.playerFormArray.value;
    }

    set teamName(v: string | null) {
        this.teamForm.controls['teamName'].setValue(v);
    }

    set managerName(v: string | null) {
        this.teamForm.controls['managerName'].setValue(v);
    }

    set players(p: Player[] | null) {
        this.teamForm.controls['players'] = null;

        if (p?.length > 0) {
            p.forEach(x => {
                (<FormArray>this.teamForm.controls['players']).controls.push(
                    new FormGroup({
                        playerName: new FormControl(x.playerName, Validators.required),
                        salary: new FormControl(x.salary, Validators.required)
                    })
                );
            });
        }
    }

}
```