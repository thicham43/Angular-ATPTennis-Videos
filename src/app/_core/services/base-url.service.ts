import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseUrlService {

  constructor() { }

  get(): string {
    /* return empty string '' for prod env on Netlify
       return   
    */
    return '';
  }
}
