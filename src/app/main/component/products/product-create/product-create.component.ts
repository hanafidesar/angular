import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductCreate } from '../../../models/product';
import { ProductService } from '../../../services/main-service/product.service';
import { SweetalertService } from '../../../../shared/sweetalert/sweetalert.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  entryForm: FormGroup;
  product: ProductCreate;

  constructor(
    private _formBuilder: FormBuilder,
    private _productService: ProductService,
    private _router: Router,
    private _sweetalertService: SweetalertService) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.entryForm = this._formBuilder.group({
      id: ['', Validators.required],
      productName: ['', Validators.required],
      startYear: [''],
      endYear: [''],
      price: ['', Validators.required]
    });
  }

  onCreateProduct(entryForm) {
    if (entryForm.status === 'INVALID') {
      this._sweetalertService.errorForm()
    }

    else {
      this.product = <ProductCreate>entryForm.value;
      this._productService.createProduct(this.product)
        .subscribe(response => {
          this._router.navigate(['/main/product']);
        },
        (errror) => {
          this._sweetalertService.errorConnection();
        })
    }
  }

  onCancel() {
    this._router.navigate(['/main/product']);
  }
}
