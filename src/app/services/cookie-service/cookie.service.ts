import { Injectable } from '@angular/core';
import { getCookie, removeCookie, setCookie } from 'typescript-cookie'
@Injectable({
  providedIn: 'root'
})
export class CookieService {

  constructor() { }
  getCookie(cookieName:string): any{
    const settingsFromCookie = getCookie(cookieName) as string;
    try{
      return JSON.parse(settingsFromCookie);
    }
    catch{
      return settingsFromCookie;
    }
  }

  setCookie(cookieName:string, cookieValue:any){
    if(typeof cookieValue === 'object'){
      cookieValue = JSON.stringify(cookieValue);
    }
    setCookie(cookieName, cookieValue);
  }
  
  removeCookie(cookieName:string){
    removeCookie(cookieName);
  }
}
