import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ICharacter } from 'src/models/character';
import { CharacterService } from '../character.service';
import { ModifierPipe } from '../modifier.pipe';

@Component({
  selector: 'app-feats-tab',
  templateUrl: './feats-tab.component.html',
  styleUrls: ['./feats-tab.component.css']
})
export class FeatsTabComponent implements OnInit {

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
}
