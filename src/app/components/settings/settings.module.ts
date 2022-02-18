import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SettingsComponent } from './settings.component';



@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    MatCheckboxModule,
  ]
})
export class SettingsModule { }
