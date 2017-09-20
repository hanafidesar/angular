import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductCreate } from '../../../models/product';
import { ProductService } from '../../../services/main-service/product.service';
import { Subscription } from 'rxjs/Subscription';
import { SweetalertService } from '../../../../shared/sweetalert/sweetalert.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  entryForm: FormGroup;
  product: ProductCreate;
  productId: string;
  private routeParamSub: Subscription;

  constructor(
    private _formBuilder: FormBuilder,
    private _productService: ProductService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _sweetalertService: SweetalertService) { }

  ngOnInit() {
    this.buildForm();
    this.getparameter();
    this.loadData();
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

  getparameter() {
    this.routeParamSub = this._route.params.subscribe(
      params => {
        this.productId = params['id'];
      });
  }

  loadData() {
    this._productService.getProduct(this.productId)
      .subscribe(response => {
        this.entryForm.patchValue(response);
      },
      (error) => {

      })
  }

  onUpdateProduct(entryForm) {
    if (entryForm.status === 'INVALID') {
      this._sweetalertService.errorForm()
    }

    else {
      this.product = <ProductCreate>entryForm.value;
      this._productService.updateProduct(this.productId, this.product)
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
