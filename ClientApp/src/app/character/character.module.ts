import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

import { HpBarComponent } from './hp-bar/hp-bar.component';
import { NotesTabComponent } from './notes-tab/notes-tab.component';
import { SkillsTabComponent } from './skills-tab/skills-tab.component';
import { FeatsTabComponent } from './feats-tab/feats-tab.component';
import { MagicTabComponent } from './magic-tab/magic-tab.component';
import { InventoryTabComponent } from './inventory-tab/inventory-tab.component';
import { RollDialogComponent } from './roll-dialog/roll-dialog.component';
import { MainTabComponent } from './main-tab/main-tab.component';
import { ModifierPipe } from './modifier.pipe';
import { TabsComponent } from './tabs/tabs.component';
import { SharedModule } from '../shared/shared.module';
import { NavigationComponent } from './navigation/navigation.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ClassDialogComponent } from './class-dialog/class-dialog.component';
import { CalculatorDialogComponent } from './calculator-dialog/calculator-dialog.component';


@NgModule({
  declarations: [
    MainTabComponent,
    ModifierPipe,
    HpBarComponent,
    NotesTabComponent,
    SkillsTabComponent,
    FeatsTabComponent,
    MagicTabComponent,
    InventoryTabComponent,
    RollDialogComponent,
    TabsComponent,
    NavigationComponent,
    ClassDialogComponent,
    CalculatorDialogComponent,
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    SharedModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    NavigationComponent
  ]
})
export class CharacterModule { }
