
import { Component, OnInit } from '@angular/core';


import { GoogleMapsModule } from '@angular/google-maps'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  title = "Google Map Render";



  public loadingMap: boolean = true;


  public options: any;
  public overlays: any[] = [];

  ngOnInit(): void {
    this.options = {

      center: { lat: 36.890257, lng: 30.707417 },

      zoom: 12
    }
  }


}
