import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProfileDataService {

  constructor(private _http: Http) { }

  getProfile() {
    return this._http.get('http://private-ffe4fa-hanafiprofile.apiary-mock.com/profile')
      .map(response => response.json());
  }
}
