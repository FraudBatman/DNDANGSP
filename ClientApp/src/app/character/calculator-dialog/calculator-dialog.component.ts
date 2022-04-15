import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Calculation } from 'src/models/calculation';
import { ICharacter } from 'src/models/character';
import { CharacterService } from '../character.service';
import { ModifierPipe } from '../modifier.pipe';

@Component({
  selector: 'app-calculator-dialog',
  templateUrl: './calculator-dialog.component.html',
  styleUrls: ['./calculator-dialog.component.css']
})
export class CalculatorDialogComponent implements OnInit {

  public char!: ICharacter;
  private sub!: Subscription;

  output = "0"
  calculated = true;

  constructor(public charServe: CharacterService, public modPipe: ModifierPipe) { }

  ngOnInit(): void {
    this.charServe.getCharacter();
    this.sub = this.charServe.character$.subscribe(
      data => this.characterLoaded(data)
    );
  }

  addMod(value: string): void {
    if (value == 'proficiency') {
      this.addToOutput(this.char.profBonus.toString());
    }
    else {
      this.char.abilities.forEach(ability => {
        if (ability.name == value)
          this.addToOutput(this.modPipe.transformAsNumber(ability.value).toString())

      }
      )
    }
  }

  addToOutput(value: string): void {
    //treat dice differently
    if (value.includes('d')) {
      let lastChar = this.output[this.output.length - 1]
      if (!Number.isInteger(lastChar) || Number.parseInt(lastChar) == 0) {
        if (this.calculated) {
          this.output = "1"
          this.calculated = false
        }
        else
          this.output += "1"
      }
      this.output += value
    }
    else if (this.calculated) {
      this.output = value;
      this.calculated = false;
    }
    else
      this.output += value
  }

  characterLoaded(char: ICharacter): void {
    this.char = char;
  }

  calculate(): void {
    let calc = new Calculation(this.output);
    this.output = calc.calculate().toString();
    this.calculated = true;
  }

}
