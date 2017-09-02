import { Component, OnInit, ElementRef, Inject, ViewChild } from '@angular/core';
import { DataTable } from 'primeng/components/datatable/datatable';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

import * as _ from 'lodash'


@Component({
  selector: 'app-lazy-create',
  templateUrl: './lazy-create.component.html',
  styleUrls: ['./lazy-create.component.css']
})
export class LazyCreateComponent implements OnInit {
  form: FormGroup;
  genderArray
  investasiArray

  @ViewChild('firstNameValidation') testImportElement: ElementRef;

  constructor( @Inject(FormBuilder) fb: FormBuilder) {
    this.form = fb.group({
      name: fb.group({
        first: ['', Validators.minLength(2)],
        last: '',
      }),
      email: ['', CustomValidators.email],
      genderId: ''
    });
  }
  ngOnInit() {
  }
  onChange() {

    console.log(this.form.value)
  }
  onChangeFirstName(x) {
    console.log(x);
  }
  diklik(event, form) {
    debugger;
  }

}
