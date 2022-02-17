import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionsDropdownComponent } from './options-dropdown.component';
import { MatMenuModule } from '@angular/material/menu'; 
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [OptionsDropdownComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule
  ],
  exports:[
    OptionsDropdownComponent
  ]
})
export class OptionsDropdownModule { }
