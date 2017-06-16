import { Injectable } from '@angular/core';

import { Http, Headers, Response, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';  // we need to import this now
import 'rxjs/add/operator/catch';  // we need to import this now
export class obs{
  id:string;
  first_name:string;
  last_name:string;
  email:string;
  phone:string;
  country:string;
}
@Injectable()
export class EditServiceService {
  constructor(private http:Http) {
  }
  listCostumer;

    getDefaultHeaders(): Headers {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('Accept-Language', 'en_US');

        headers.append('Access-Control-Allow-Headers', 'Content-Type');
        headers.append('Access-Control-Allow-Methods', 'GET');
        headers.append('Access-Control-Allow-Origin', '*');

    let timezoneOffset = new Date().getTimezoneOffset();
    headers.append('Timezone-Offset', timezoneOffset.toString());
    return headers;
  }

  getDataCostumer() {

    let headers = this.getDefaultHeaders();
    return this.http.get('http://localhost/pelindung_satwa/getanimal.php' , {headers:headers})
      .map((response: Response) => response.json(), (error)=>{
        console.log(error);
      })
  }

  getDataCostumer_Obs() {
    return this.http.get('app/Observable_json.json')
      .map((response: Response) => response.json())
  }
}
