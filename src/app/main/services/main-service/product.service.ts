import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { ProductCreate } from '../../models/product';

@Injectable()
export class ProductService {

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

  getProducts() {
    return this._http.get('http://localhost:3000/product')
      .map(response => response.json());
  }

  getProduct(productId: string) {
    return this._http.get('http://localhost:3000/product/' + productId)
      .map(response => response.json());
  }

  createProduct(product: ProductCreate) {
    const headers = this.getDefaultHeaders();
    return this._http.post('http://localhost:3000/product', product, { headers: headers })
      .map(response => response.json());
  }

  updateProduct(productId: string, product: ProductCreate) {
    const headers = this.getDefaultHeaders();
    return this._http.put('http://localhost:3000/product/' + productId, product)
      .map(response => response.json());
  }
}
