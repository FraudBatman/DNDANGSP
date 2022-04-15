import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { interval } from 'rxjs';
import { Calculation } from 'src/models/calculation';

@Component({
  selector: 'app-roll-dialog',
  templateUrl: './roll-dialog.component.html',
  styleUrls: ['./roll-dialog.component.css']
})
export class RollDialogComponent implements OnInit {

  displayNumber = 0;
  showCritStatus = false;
  additionalTextReady = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { title: string, calc: Calculation }) {
    this.rollAnim(1);
  }

  ngOnInit(): void {
  }

  async rollAnim(seconds = .5) {
    seconds *= 1000;

    while (seconds >= 0) {
      await this.delay(50);
      seconds -= 50;
      // this.displayNumber++;
      //this.displayNumber = this.data.calc.toString();
      this.displayNumber = this.data.calc.calculate();
    }

    this.displayNumber = this.data.calc.calculate();
    this.showCritStatus = true;
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}
