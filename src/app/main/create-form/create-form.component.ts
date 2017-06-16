import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

import * as _ from 'lodash';

import { DataGeneralService } from '../../services/main-service/data-general.service';
import { CreateFrom } from '../../models/CreateFrom';
import { Subscription } from 'rxjs/Subscription';

import { Observable } from 'rxjs/Observable'
//const SnackBar = require('node-snackbar');

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})

export class CreateFormComponent implements OnInit {
  array:any;
  item: CreateFrom;
  entryFrom: FormGroup;
  genderArray;
  investasiArray;
  subscription: Subscription;
  genders: Array<any>
  products: Array<any>
  date:Date;
  constructor(
    @Inject(FormBuilder)
    private dataGeneralService: DataGeneralService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.build();
    this.loadData();
  }
  
  build() {
    this.entryFrom = this.fb.group({
      name: this.fb.group({
        first: ['', Validators.required],
        last: '',
      }),
      email: ['', Validators.compose([Validators.required, CustomValidators.email])],
      genderId: '',
      status: '',
      productId: '',
      DateBirth:''
    })
  }

  loadData() {
    this.loadGeneral();
    
    this.array = {
      name: { first: "hanafi", last: "desar" },
      email: "hanafi_desar@yahoo.com",
      product: [{ id: '1', name: 'baju' }],
      genderId: "f",
      productId: "b",
      date: Date
    }
    this.array.product.push({test:"asa"})
    // this.array.product.map(o=>{
    //   o.name
    //   debugger;
    // })
    this.entryFrom.patchValue(this.array)

  }

  loadGeneral() {
    this.genders = [{ id: "1", code: "f", name: "Female" }, { id: "1", code: "m", name: "Male" }]
    this.products = [{ id: '1',code: "b", name: 'baju' }, { id: '2',code: "s", name: 'sepatu' }]


  }
  toast() {
  //  SnackBar.show({ text: "Form Error", actionText: "x", pos: "top-right" })
  }
  onSubmit() {
    this.item = this.entryFrom.value;
    this.toast();
  }
}

