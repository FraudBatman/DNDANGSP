import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ICharacter } from 'src/models/character';
import { CharacterService } from '../character.service';
import { ModifierPipe } from '../modifier.pipe';

@Component({
  selector: 'app-notes-tab',
  templateUrl: './notes-tab.component.html',
  styleUrls: ['./notes-tab.component.css']
})
export class NotesTabComponent implements OnInit {

  public char!: ICharacter;
  public charLoaded = false;
  private sub!: Subscription;

  constructor(private charServe: CharacterService, private modPipe: ModifierPipe) { }

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

  roll(value: number): void {
    var dieRoll = 0;
    dieRoll = this.dieRoll(20);

    alert(dieRoll + " + " + this.modPipe.transformAsNumber(value) + " = " + (dieRoll + this.modPipe.transformAsNumber(value)));
  }

  dieRoll(dieSize: number): number {
    return Math.round(Math.random() * (dieSize - 1) + 1);
  }

}
