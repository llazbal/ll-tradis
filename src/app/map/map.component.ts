import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { AgmMap, GoogleMapsAPIWrapper } from '@agm/core';

@Component({
  selector: 'll-tradis-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  providers: [GoogleMapsAPIWrapper]
})
export class MapComponent extends AgmMap implements OnInit {
  
  _lat: number;
  _lng: number;

  constructor(_elem: ElementRef<any>, _mapsWrapper: GoogleMapsAPIWrapper) { 
    super(_elem, _mapsWrapper);
  }

  ngOnInit() {
  }

  @Input()
  set lat(value: number) {
		this._lat = Number(value);
  }
  get lat(): number {
    return this._lat;
  }

  @Input()
  set lng(value: number) {
		this._lng = Number(value);
  }
  get lng(): number {
    return this._lng;
  }
}
