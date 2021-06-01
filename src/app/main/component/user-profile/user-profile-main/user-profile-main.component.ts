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
  selector: 'app-user-profile-main',
  templateUrl: './user-profile-main.component.html',
  styleUrls: ['./user-profile-main.component.scss']
})

export class UserProfileMainComponent implements OnInit {

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
      postalCode: ['-'],
      phone: [''],
      aboutMe: ['I am very interested in programming and enjoy my job. my career in programming, I am used to being required to be able to learn quickly. Starting as a technical support, I was trusted to be a programmer because of my curiosity and fast learning ability, then became a server administrator (Debian server), AWS and Azure. as well as being a web programmer and Cross Platform Mobile Application']
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

  onPrint() {
    const profile = this.entryForm.value
    const data = {
      'template': { 'name': 'Profile' },
      'data': profile
    };
    this._printDataService.printProfileDetail(data);
  }

  goGithub(){
    window.open('https://github.com/hanafidesar', '_blank');
  }
  goLinkedIn(){
    window.open('https://www.linkedin.com/in/hanafi-desar-1b1b5b18b/', '_blank');
  }
  onFollow() {
    this._sweetalertService.notWorkingYet();
  }
  onUpdate() {
    this._router.navigate(['/main/profile/edit']);
  }
  openFile() {
    window.open('https://drive.google.com/file/d/1eEDdYGbMlp8U64OGoLJu58Lkv9qbkmxm/view?usp=sharing', '_blank');
  }

}
