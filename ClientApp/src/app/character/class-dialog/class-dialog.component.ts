import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-class-dialog',
  templateUrl: './class-dialog.component.html',
  styleUrls: ['./class-dialog.component.css']
})
export class ClassDialogComponent implements OnInit {
  public charClass: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { charClass: any }) {
    this.charClass = data.charClass;
  }

  ngOnInit(): void {
  }

}
