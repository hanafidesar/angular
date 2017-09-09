import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
@Injectable()
export class LoginService {

  constructor(
    private _http: Http,
    private _localStorage: LocalStorageService) { }

  getDefaultHeaders(): Headers {
    const headers = new Headers();
    headers.append('Accept-Language', 'en_US');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Credentials', 'true');
    headers.append('Access-Control-Allow-Headers', 'Content-Type, Accept');
    headers.append('Access-Control-Allow-Methods', 'GET, POS');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Max-Age', '1728000');
    headers.append('Cache-Control', 'no-cache');
    headers.append('Content-Type', 'application/json');
    const timezoneOffset = new Date().getTimezoneOffset();
    headers.append('Timezone-Offset', timezoneOffset.toString());
    return headers;
  }

  login() {
    const headers = this.getDefaultHeaders();
    return this._http.get('http://private-e6d027-hanafi.apiary-mock.com/token')
      .map(response => response.json())
      .do(response => {
        this._localStorage.set('data', JSON.stringify(response));
      });
  }

  logout() {
    this._localStorage.clearAll();
  }
}
