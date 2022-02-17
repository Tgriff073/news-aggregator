import { TestBed } from '@angular/core/testing';

import { CookieService } from './cookie.service';
import { getCookie, setCookie, removeCookie } from 'typescript-cookie'
describe('CookieService', () => {
  let service: CookieService;
  const testCookieName:string = 'testCookie';
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CookieService);
    removeCookie(testCookieName);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('get,set, remove cookie', () => {
    it('should get cookie', () => {
      const testCookieValue:string = 'test value';
      setCookie(testCookieName, testCookieValue, { expires: 7 })
      
      const result = service.getCookie(testCookieName);

      expect(result).toEqual(testCookieValue);
    });
    it('shoulld set cookie', () => {
      const testCookieName:string = 'testCookie';
      const testCookieValue:string = 'test value';
      service.setCookie(testCookieName, testCookieValue);

      const result = getCookie('testCookie');
      
      expect(result).toEqual(testCookieValue);
    });

    it('should remove the cookie', () => {
      const testCookieValue:string = 'test value';
      setCookie(testCookieName, testCookieValue);

      expect(getCookie(testCookieName)).toBeDefined();

      service.removeCookie(testCookieName);
      
      expect(getCookie(testCookieName)).toBeUndefined();
    });
    
    it('should stringify cookie if its an object', () => {
      const cookieToSave = {test:'stringify me'};
      service.setCookie(testCookieName, cookieToSave);

      const result = getCookie(testCookieName);
      expect(result).toEqual(JSON.stringify(cookieToSave));
    });
    it('should parse string cookie if possible', () => {
      const cookieToSave = {test:'parse me'};
      setCookie(testCookieName, JSON.stringify(cookieToSave));

      const result = service.getCookie(testCookieName);

      expect(typeof result === 'object').toEqual(true);
    });
    
    
  });

});
