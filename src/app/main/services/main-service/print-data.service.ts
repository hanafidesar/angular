import { Injectable } from '@angular/core';
import * as jsreport from 'jsreport-browser-client-dist';

@Injectable()
export class PrintDataService {

  constructor() {
    jsreport.serverUrl = 'http://localhost:5488';
  }
  headers() {
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    return headers;
  }

  printProfileDetail(data): any {
    jsreport.headers = this.headers();
    // jsreport.renderAsync(data).then(function (res) {
    //   res.download('OrderDetail.pdf')
    // });
    jsreport.render('_blank', data);
  }

}
