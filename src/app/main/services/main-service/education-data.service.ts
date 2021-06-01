import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class EducationDataService {

  constructor(private _http: Http) { }

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

  getEducation() {
    return this._http.get('https://api-rails-hanafi.herokuapp.com/educations')
      .map(response => response.json());
  }

  postEducation(data) {
    const headers = this.getDefaultHeaders();
    return this._http.post('https://api-rails-hanafi.herokuapp.com/educations', data, { headers: headers })
      .map(response => response.json());
  }
}
