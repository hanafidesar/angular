import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

@Injectable()
export class DataGeneralService {

  constructor(private http: Http) { }


  // getGenderData() {
  //   debugger;
  //   gender_data;

  //   var gender_data = [{
  //     "id": 1,
  //     "name": "Pria"
  //   }, {
  //     "id": 2,
  //     "name": "Wanita"
  //   }, {
  //     "id": 3,
  //     "name": "Lainnya"
  //   }]
  //   return gender_data;
  // }

  getGenderData() {
    return this.http.get('data-general.json').map((response: Response) => response.json()
    )
  }

  getInvestData() {
    investasi_data;
    var investasi_data = [{
      "name": "Deposit"
    }, {
      "name": "Golden"
    }, {
      "name": "Silver"
    }]
    return investasi_data;
  }


}

