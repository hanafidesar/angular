import { Component, OnInit } from '@angular/core';
import { CustomValidators } from 'ng2-validation';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PrintDataService } from '../../../services/main-service/print-data.service';
import { Profile } from '../../../models/profile';
import { ProfileDataService } from '../../../services/main-service/profile-data.service';
import { Router } from '@angular/router';
import { SpinnerService } from '../../../../shared/spinner/spinner.service';
import { SweetalertService } from '../../../../shared/sweetalert/sweetalert.service';

@Component({
  selector: 'app-user-profile-edit',
  templateUrl: './user-profile-edit.component.html',
  styleUrls: ['./user-profile-edit.component.css']
})
export class UserProfileEditComponent implements OnInit {

  entryForm: FormGroup;
  profile: Profile;

  constructor(
    private _formBuilder: FormBuilder,
    private _printDataService: PrintDataService,
    private _profileDataService: ProfileDataService,
    private _router: Router,
    private _spinnerService: SpinnerService,
    private _sweetalertService: SweetalertService
  ) { }

  ngOnInit() {
    this.buildForm();
    this.loadData();
  }

  buildForm() {
    this.entryForm = this._formBuilder.group({
      company: [''],
      username: ['', Validators.required],
      email: ['', [Validators.required, CustomValidators.email]],
      firstname: [''],
      lastname: [''],
      address: [''],
      city: [''],
      country: [''],
      postalCode: [''],
      aboutMe: ['']
    });
  }

  loadData() {
    this._spinnerService.show('app-user-profile-main');
    this._profileDataService.getProfile()
      .subscribe(response => {
        this._spinnerService.hide('app-user-profile-main');
        this.profile = response;
        this.entryForm.patchValue(this.profile);
      },
      (error) => {
        this._spinnerService.hide('app-user-profile-main');
      });
  }

  onSave() {
    if (this.entryForm.status === 'INVALID') {
      this._sweetalertService.errorForm()
    }
    else {
      const data = this.entryForm.value;
      this._profileDataService.postProfile(data)
        .subscribe(response => {
          this._router.navigate(['/main/profile']);
        }, (error) => {
          this._sweetalertService.error();
        })
    }
  }

  onCancel() {
    this._router.navigate(['/main/profile']);
  }
}
