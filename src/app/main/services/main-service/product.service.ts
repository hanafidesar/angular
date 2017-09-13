import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  constructor( private _http: Http) { }

  getProductList() {
    return this._http.get('http://private-696644-hanafiproduct.apiary-mock.com/product-list')
      .map(response => response.json());
  }

}
