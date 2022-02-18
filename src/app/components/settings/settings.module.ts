import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SettingsComponent } from './settings.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    RouterModule
  ]
})
export class SettingsModule { }
