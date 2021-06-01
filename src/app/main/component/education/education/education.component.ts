import { Component, OnInit, ElementRef, ViewChild, NgZone, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { EducationDataService } from '../../../services/main-service/education-data.service';
import { SpinnerService } from '../../../../shared/spinner/spinner.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educations: any;
  @ViewChild('search') public searchElementRef: ElementRef;
  constructor(
    public _education_data_service: EducationDataService,
    private _spinnerService: SpinnerService,
    @Inject(NgZone) private zone: NgZone) { }

  ngOnInit() {
    this._spinnerService.show('app-education');
    this._education_data_service.getEducation()
      .subscribe(response => {
        this.educations = response.map(function(x){
          
          let ws = new Date(parseInt(Date.parse(x.education_start).toString()))
          let we = new Date(parseInt(Date.parse(x.educati_end || new Date).toString()))
          x.education_start = `${ws.getDate()}/${ws.getMonth()}/${ws.getFullYear()}`
          x.education_end = `${we.getDate()}/${we.getMonth()}/${we.getFullYear()}`

          return x
        })
        this.educations.sort((a, b) => parseFloat(b.id) - parseFloat(a.id));
        this._spinnerService.hide('app-education');
      },
      (error) => {
      });
  }

  openFile(data) {
    window.open(data, "_blank");
  }
}
