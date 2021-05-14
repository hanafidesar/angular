import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CustomValidators } from 'ng2-validation';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../../core/auth.service';
import { SpinnerService } from '../../../../shared/spinner/spinner.service';
import { ToastService } from '../../../../shared/toast/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class LoginComponent implements OnInit {

  entryForm: FormGroup;

  constructor(
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    private _spinnerService: SpinnerService,
    private _toastService: ToastService
  ) { }

  buildForm() {
    this.entryForm = this._formBuilder.group({
      email: ['hanafi.desar@gmail.com', [Validators.required, CustomValidators.email]],
      password: ['123456', Validators.required]
    });
  }

  ngOnInit() {
    this.buildForm();
  }

  onSubmit(value, event) {
    if (value.email === 'hanafi.desar@gmail.com' || value.email === '123456') {
      this.validationLogin(value);
    }

    else {
      const errorInfo = 'Failed username or password';
      this._toastService.showToast(errorInfo);
    }
  }

  validationLogin(value) {
    // this._spinnerService.show('app-login');
    // this._authService.login()
    //   .subscribe(response => {
    //     this._spinnerService.hide('app-login');
    //     this._router.navigate(['/main/dashboard-main']);
    //   },
    //   (error) => {
    //     this._spinnerService.hide('app-login');
    //     const errorInfo = 'I think the problem is on your connection, make sure the connection is running as it should';
    //     this._toastService.showToast(errorInfo);
    //   });

    this._spinnerService.hide('app-login');
    this._router.navigate(['/main/dashboard-main']);
  }

}
