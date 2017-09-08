import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'app-user-profile-main',
  templateUrl: './user-profile-main.component.html',
  styleUrls: ['./user-profile-main.component.scss']
})
export class UserProfileMainComponent implements OnInit {
  entryForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.entryForm = this._formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, CustomValidators.email]]
    });
  }

  klik(){
    this.entryForm
  }
}
