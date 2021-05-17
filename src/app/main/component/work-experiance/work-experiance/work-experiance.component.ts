import { Component, OnInit, ElementRef, ViewChild, NgZone, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { MapsAPILoader } from '@agm/core';
@Component({
  selector: 'app-work-experiance',
  templateUrl: './work-experiance.component.html',
  styleUrls: ['./work-experiance.component.css']
})
export class WorkExperianceComponent implements OnInit {

  markers: any[] = [];
  lat: any = -6.8970388;
  lng: any = 107.5940537;

  @ViewChild('search') public searchElementRef: ElementRef;
  constructor(
    private _mapsAPILoader: MapsAPILoader,
    @Inject(NgZone) private zone: NgZone) { }

  ngOnInit() {
    this.markers = [
      {
        lat: this.lat,
        lng: this.lng,
        label: 'a',
        draggable: true
      }
    ]
  }

  mapClicked(MouseEvent) {
    this.markers = [];
    this.markers.push({
      lat: MouseEvent.coords.lat,
      lng: MouseEvent.coords.lng,
      label: 'A',
      draggable: true
    });
  }

}
