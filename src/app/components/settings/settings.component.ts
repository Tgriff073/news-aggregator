import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings-service/settings.service';
import { CategoryViewObject, UserSettings } from 'src/app/types/UserSettings';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})

export class SettingsComponent{
  settingsCategories:CategoryViewObject[];
  constructor(private settingsService: SettingsService) {
    this.settingsCategories = [
      {name:'business',value:false},
      {name:'entertainment',value:false},
      {name:'general',value:false},
      {name:'health',value:false},
      {name:'science',value:false},
      {name:'sports',value:false},
      {name:'technology',value:false}
    ];
   }

   checkedChange(settingsFromDom:any, event:any, index: number){
    settingsFromDom[index].value = !settingsFromDom[index].value
    event.stopPropagation();
   }

   getSelectedCategoriesArray():string[]{
    return this.settingsCategories
    .filter(category=>category.value === true)
    .map(category=>category.name);
   }
   saveSettings(){
     const categories = this.getSelectedCategoriesArray();
     const userSettings:UserSettings = {
       categories
     }
    this.settingsService.saveUserSettingsAndSaveToCookie(userSettings);
   }

}
