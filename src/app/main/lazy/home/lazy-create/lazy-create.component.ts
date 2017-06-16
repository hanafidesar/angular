import { Component, OnInit, ElementRef, Inject, ViewChild } from '@angular/core';
import { DataTable } from 'primeng/components/datatable/datatable';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DataGeneralService } from '../../../../services/main-service/data-general.service'
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

  @ViewChild ('firstNameValidation') testImportElement: ElementRef;

  constructor(@Inject(FormBuilder) fb: FormBuilder, private _DataGeneralService: DataGeneralService) {
    this.form = fb.group({
      name: fb.group({
        first: ['Nancy', Validators.minLength(2)],
        last: 'Drew',
      }),
      email: [''],
      genderId: ''
    });
   }
  ngOnInit() {
    debugger
    const xxx = [];
    this.form.patchValue(xxx);
    console.log(xxx);
    this.form.controls["email"].setValue("hanafi");
    this._DataGeneralService.getGenderData()
    .subscribe(response=>{
      response
      debugger;
    })
    //this.investasiArray = this._DataGeneralService.getInvestData();
  }
  onChange(){
    console.log(this.form.value)
  }
  onChangeFirstName(x){
    console.log(x);
  }
  diklik(event,form){
    var x = form;
  }

}
