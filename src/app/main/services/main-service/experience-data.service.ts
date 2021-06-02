import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { AppApi } from '../../../../app.api';

@Injectable()
export class ExperinceDataService {

  apiUrl = AppApi.BASE_API_URL;
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

  getExperience() {
    return this._http.get(this.apiUrl + 'experiences')
      .map(response => response.json());
  }

  postExperience(data) {
    const headers = this.getDefaultHeaders();
    return this._http.post('https://api-rails-hanafi.herokuapp.com/experiences', data, { headers: headers })
      .map(response => response.json());
  }
}
