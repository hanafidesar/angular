import { Component, OnInit } from '@angular/core';
import { ProductGet } from '../../../models/product';
import { ProductService } from '../../../services/main-service/product.service';
import { Router } from '@angular/router';
import { SpinnerService } from '../../../../shared/spinner/spinner.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {
  product: ProductGet;
  constructor(
    private _productService: ProductService,
    private _router: Router,
    private _spinnerService: SpinnerService
  ) { }

  ngOnInit() {
    this._spinnerService.show('app-product-list');
    const x = this._productService.getProducts()
      .subscribe(response => {
        this._spinnerService.hide('app-product-list');
        this.product = response;
      },
      (error) => {
        this._spinnerService.hide('app-product-list');
      }
      )
  }

  goCreateProduct() {
    this._router.navigate(['/main/product/product-create']);
  }

  goEditProduct(id) {
    this._router.navigate(['/main/product', id, 'edit']);
  }
}

