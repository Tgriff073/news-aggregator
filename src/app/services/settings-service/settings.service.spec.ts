import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { UserSettings } from 'src/app/types/UserSettings';
import { CookieService } from '../cookie-service/cookie.service';

import { SettingsService } from './settings.service';

describe('SettingsService', () => {
  let service: SettingsService;
  let cookieService: CookieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SettingsService);
    cookieService = TestBed.inject(CookieService);
    cookieService.removeCookie(service.userSettingsCookieName);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('save user settings to cookies', () => {
    it('should save user settings to cookie', () => {
      const cookieToSave = {categories:['Sports', 'Business']};
    
      service.userSettings = cookieToSave;
      
      service.saveUserSettingsToCookie();
      const userSettings = cookieService.getCookie(service.userSettingsCookieName);
      
      expect(userSettings).toEqual(cookieToSave);
    });
    
    it('should return user settings from cookie', () => {
      const cookieToSave = {categories:['Sports', 'Business']};
      cookieService.setCookie(service.userSettingsCookieName, cookieToSave);

      service.retrieveSettingsFromCookie();

      expect(service.userSettings).toEqual(cookieToSave);
    });

    

  });
  describe('getUserSettings', () => {
    it('should fetch from cookie service if settings are not populated yet', () => {
      const cookieToSave = {categories:['Sports', 'Business']};
      cookieService.setCookie(service.userSettingsCookieName, cookieToSave);
      const cookieServiceGetSpy = spyOn(cookieService, 'getCookie').and.callThrough();
      
      const results = service.getUserSettings();

      expect(results).toEqual(cookieToSave);
      expect(cookieServiceGetSpy).toHaveBeenCalledTimes(1);
    });
  });
  
});
