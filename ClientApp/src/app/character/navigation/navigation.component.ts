import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { CharacterService } from '../character.service';
import { ICharacter } from 'src/models/character';
import { MatDialog } from '@angular/material/dialog';
import { CalculatorDialogComponent } from '../calculator-dialog/calculator-dialog.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  public char!: ICharacter;
  private sub!: Subscription;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, public charServe: CharacterService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.charServe.getCharacter();
    this.sub = this.charServe.character$.subscribe(
      data => this.characterLoaded(data)
    );
  }

  characterLoaded(char: ICharacter): void {
    this.char = char;
  }

  showCalc(): void {
    this.dialog.open(CalculatorDialogComponent, {
      // height: '350px', width: '250px'
    })
  }

}
