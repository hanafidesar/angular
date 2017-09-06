// angular library
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// 3rd library
import { CustomValidators } from 'ng2-validation';

// service
import { LoginService } from '../../../services/auth-service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  entryForm: FormGroup;
  constructor(
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _loginService: LoginService
  ) { }

  buildForm() {
    this.entryForm = this._formBuilder.group({
      email: ['', [Validators.required, CustomValidators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.buildForm();
  }

  onSubmit(values, event) {
    debugger;
    this._router.navigate(['/main/dashboard-main'])
    this._loginService.getGenderData(values)
      .subscribe(response => {
      },
      (error) => {
      })
  }

}
