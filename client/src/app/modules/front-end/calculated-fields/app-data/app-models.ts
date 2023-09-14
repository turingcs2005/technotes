import { FormControl, FormGroup, FormArray, Validators } from "@angular/forms";
import { numberToCurrency, currencyToNumber } from "src/app/app-data/app-tools";

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
        return currencyToNumber(this.playerForm.controls['salary'].value);
    }

    set playerName(v: string | null) {
        this.playerForm.controls['playerName'].setValue(v);
    }

    set salary(v: number | null) {
        this.playerForm.controls['salary'].setValue(numberToCurrency(v));
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

    get players(){
        return this.playerFormArray.controls.map( (i:any) => new Player(i));
    }

    get totalPlayerSalary(): number {
        console.log('This dude gets executed with every single change detection cycle!');
        return this.players.map(x => x.salary).reduce( (a, b) => a + b ); 
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
                        salary: new FormControl(numberToCurrency(x.salary), Validators.required)
                    })
                );
            });
        }
    }

}