import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-validation-form',
  templateUrl: './validation-form.component.html',
  styleUrls: ['./validation-form.component.css']
})
export class ValidationFormComponent implements OnInit {

  @Input() values: any;

  constructor() {
  }

  ngOnInit() {
  }

}
