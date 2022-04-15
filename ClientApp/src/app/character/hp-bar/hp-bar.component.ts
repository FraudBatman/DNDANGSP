import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ICharacter } from 'src/models/character';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-hp-bar',
  templateUrl: './hp-bar.component.html',
  styleUrls: ['./hp-bar.component.css']
})
export class HpBarComponent implements OnInit {

  public char!: ICharacter;
  private sub!: Subscription;

  constructor(public charServe: CharacterService) { }

  ngOnInit(): void {
    // this.charServe.getCharacter();
    this.sub = this.charServe.character$.subscribe(
      data => this.characterLoaded(data)
    )
  }

  characterLoaded(char: ICharacter): void {
    this.char = char;
  }

}
