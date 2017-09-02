import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  getDefaultHeaders(): Headers {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('Accept-Language', 'en_US');

    headers.append("Cache-Control", "no-cache");
    headers.append("Access-Control-Allow-Methods", "GET, POST");
    headers.append("Access-Control-Allow-Headers", "Content-Type, Accept");
    headers.append("Access-Control-Max-Age", "1728000");

    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
    headers.append('Access-Control-Allow-Credentials', 'true');
    let timezoneOffset = new Date().getTimezoneOffset();
    headers.append('Timezone-Offset', timezoneOffset.toString());
    return headers;
  }

  getGenderData(data) {
    debugger
    let headers = this.getDefaultHeaders();
    let postData = JSON.stringify(data);
    return this.http.post('http://127.0.0.1/rest_ci/index.php/login', data, { headers: headers })
  }
}
