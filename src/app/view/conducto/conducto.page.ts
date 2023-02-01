import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
declare var  mapboxgl : any;

@Component({
  selector: 'app-conducto',
  templateUrl: './conducto.page.html',
  styleUrls: ['./conducto.page.scss'],
})
export class ConductoPage implements OnInit , AfterViewInit {

  constructor() { }

  makerInit! : any;
  data! : any;
  estado : string | undefined

  async ngAfterViewInit() {
    const data = localStorage.getItem("viaje");
    this.data = JSON.parse(data!);
    const ubicacion =  await Geolocation.getCurrentPosition();
    this.makerInit = [ubicacion.coords.longitude,ubicacion.coords.latitude];
 
  }




  ngOnInit() {
  }

}
