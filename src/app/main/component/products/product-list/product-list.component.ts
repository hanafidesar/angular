import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/main-service/product.service';
import { SpinnerService } from '../../../../shared/spinner/spinner.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {
  product: any;
  constructor(
    private _productService: ProductService,
    private _spinnerService: SpinnerService
  ) { }

  ngOnInit() {
    this._spinnerService.show('app-product-list');
    const x = this._productService.getProductList()
      .subscribe(response => {
        this._spinnerService.hide('app-product-list');
        this.product = response;
      },
      (error) => {
        this._spinnerService.hide('app-product-list');
      }
      )
  }

}
