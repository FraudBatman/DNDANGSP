import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Calculation } from 'src/models/calculation';
import { ICharacter } from 'src/models/character';
import { CharacterService } from '../character.service';
import { ClassDialogComponent } from '../class-dialog/class-dialog.component';
import { ModifierPipe } from '../modifier.pipe';
import { RollDialogComponent } from '../roll-dialog/roll-dialog.component';

@Component({
  selector: 'app-main-tab',
  templateUrl: './main-tab.component.html',
  styleUrls: ['./main-tab.component.css']
})
export class MainTabComponent implements OnInit {

  public char!: ICharacter;
  public charLoaded = false;
  private sub!: Subscription;

  constructor(private charServe: CharacterService, private modPipe: ModifierPipe, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.charServe.getCharacter();
    this.sub = this.charServe.character$.subscribe(
      data => this.characterLoaded(data)
    )
  }

  characterLoaded(char: ICharacter): void {
    this.char = char;
    this.charLoaded = true;
  }

  displayClass(charClass: any): void {
    this.dialog.open(ClassDialogComponent, {
      data: {
        charClass: charClass
      }
    })
  }

  roll(ability: any): void {
    let calc = new Calculation("1d20+" + this.modPipe.transformAsNumber(ability.value));
    this.dialog.open(RollDialogComponent, {
      data: {
        title: ability.name,
        calc: calc
      }
    })
  }
}
