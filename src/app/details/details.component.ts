import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from "@angular/router";
import { MapComponent } from '../map/map.component';
import { GoogleMapsAPIWrapper, PolygonManager } from '@agm/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  providers: [GoogleMapsAPIWrapper]
})
export class DetailsComponent implements OnInit {

  user$: Object;
  protected _userMap: MapComponent;
  
  protected _lat: number;
  protected _lng: number;
  
  constructor(private route: ActivatedRoute, private data: DataService) { 
     this.route.params.subscribe( params => this.user$ = params.id );
  }

  ngOnInit() {
    this.data.getUser(this.user$).subscribe(
      data => this.user$ = data 
    );
  }

  @ViewChild('userMap')
	set userMap(value: MapComponent) {
		this._userMap = value;
  }
  get userMap(): MapComponent {
    return this._userMap;
  }

  protected initializeMap() {
    (<any>this.user$).address.geo.lat = <number>(<any>this.user$).address.geo.lat;
    (<any>this.user$).address.geo.lng = <number>(<any>this.user$).address.geo.lng;
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
