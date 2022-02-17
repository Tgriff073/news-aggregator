import { TestBed } from '@angular/core/testing';

import { CookieService } from './cookie.service';
import { getCookie, setCookie } from 'typescript-cookie'
describe('CookieService', () => {
  let service: CookieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CookieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Description', () => {
    it('should get cookie', () => {
      const testCookieName:string = 'testCookie';
      setCookie('testCookie', 'test value', { expires: 7 })
      const result = service.getCookie(testCookieName);
      expect(result).toEqual(7);
    });
    
  });
});
