import { Component, OnInit } from '@angular/core';
import { CustomValidators } from 'ng2-validation';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Profile } from '../../../models/profile';
import { ProfileDataService } from '../../../services/main-service/profile-data.service';
import { SpinnerService } from '../../../../shared/spinner/spinner.service';
import { SweetalertService } from '../../../../shared/sweetalert/sweetalert.service';

@Component({
  selector: 'app-user-profile-main',
  templateUrl: './user-profile-main.component.html',
  styleUrls: ['./user-profile-main.component.scss']
})

export class UserProfileMainComponent implements OnInit {

  entryForm: FormGroup;
  profile: Profile;

  constructor(
    private _formBuilder: FormBuilder,
    private _profileDataService: ProfileDataService,
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
      aboutMe:['']
    });
  }

  loadData() {
    debugger;
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

  onFollow() {
    this._sweetalertService.notWorkingYet();
  }

  onUpdate() {
    this._sweetalertService.notWorkingYet();
  }

}
