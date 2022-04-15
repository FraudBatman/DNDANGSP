import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Calculation } from 'src/models/calculation';
import { ICharacter } from 'src/models/character';
import { CharacterService } from '../character.service';
import { ModifierPipe } from '../modifier.pipe';
import { RollDialogComponent } from '../roll-dialog/roll-dialog.component';

@Component({
  selector: 'app-skills-tab',
  templateUrl: './skills-tab.component.html',
  styleUrls: ['./skills-tab.component.css']
})
export class SkillsTabComponent implements OnInit {

  public char!: ICharacter;
  public charLoaded = false;
  private sub!: Subscription;

  constructor(private charServe: CharacterService, public modPipe: ModifierPipe, public dialog: MatDialog) { }

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

  roll(ability: any, savingThrow: boolean): void {

    let mod = this.modPipe.transformWithAddition(ability.value, (savingThrow && ability.savingThrowProficiency ? this.char.profBonus : 0))
    let dialogTitle = `${ability.name} ${savingThrow ? "Saving Throw" : ""}`;

    let calc = new Calculation("1d20" + mod);
    this.dialog.open(RollDialogComponent, {
      data: {
        title: dialogTitle,
        calc: calc
      }
    })
  }

  rollSkill(skill: any): void {
    let mod = this.getSkillMod(skill);
    let dialogTitle = skill.name;
    let calc = new Calculation("1d20" + mod);
    this.dialog.open(RollDialogComponent, {
      data: {
        title: dialogTitle,
        calc: calc
      }
    })
  }

  //TODO: have this grab the mods from feats n stuff
  getSkillMod(skill: any): string {
    let returnValue = "bad ability"
    this.char.abilities.forEach(ability => {
      if (ability.name == skill.ability)
        returnValue = this.modPipe.transformWithAddition(ability.value, (skill.proficiency ? this.char.profBonus : 0));
    });

    //get rid of bad abilities
    if (returnValue == "bad ability")
      return returnValue;

    //add mods from feats
    this.char.classes.forEach(charClass => {
      if (charClass.feats != undefined)
        charClass.feats.forEach(feat => {
          if (feat.modifiers != undefined)
            feat.modifiers.forEach(modifier => {
              if (modifier.stat == skill.name) {
                returnValue += modifier.value;
              }
            })
        })
    })

    if (this.char.feats != undefined)
      this.char.feats.forEach(feat => {
        if (feat.modifiers != undefined)
          feat.modifiers.forEach(modifier => {
            if (modifier.stat == skill.name) {
              returnValue += modifier.value;
            }
          })
      })


    //calculate the mods and send it back
    let calc = new Calculation(returnValue)
    return this.modPipe.transformMods(calc.calculate());
  }
}
