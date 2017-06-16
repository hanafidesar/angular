import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-data-form',
  templateUrl: './edit-data-form.component.html',
  styleUrls: ['./edit-data-form.component.css']
})
export class EditDataFormComponent implements OnInit {
param_id;
param_name;
  constructor(route: ActivatedRoute) {
    this.param_id = route.snapshot.params['id'];
    this.param_name = route.snapshot.params['name'];
   }

  ngOnInit() {
  }

}
