import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserSettings } from 'src/app/types/UserSettings';
import { CookieService } from '../cookie-service/cookie.service';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  userSettings:UserSettings;
  userSettingsCookieName:string = 'user-settings';
  private readonly defaultSettings:UserSettings = {categories:[]};
  constructor(private cookieService: CookieService) {
    this.userSettings = this.defaultSettings;
   }

  saveUserSettingsToCookie(){
    this.cookieService.setCookie(this.userSettingsCookieName, this.userSettings);
  }

  retrieveSettingsFromCookie(): any{
    const settingsFromCookie = this.cookieService.getCookie(this.userSettingsCookieName);
    try{
      this.userSettings = JSON.parse(settingsFromCookie);
    }
    catch{
      this.userSettings = settingsFromCookie;
    }
  }

  getUserSettings(): UserSettings{
    if(this.userSettings === this.defaultSettings){
      this.retrieveSettingsFromCookie();
    }
    return this.userSettings;
  }
}
