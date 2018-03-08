import { Injectable } from '@angular/core';

const CONFIG = {
  apiUrl: 'https://pure-chamber-69214.herokuapp.com/',
};

@Injectable()
export class AppSettings {

  constructor() {
  }

  public getApiUrl() {
    return CONFIG.apiUrl;
  }
}
