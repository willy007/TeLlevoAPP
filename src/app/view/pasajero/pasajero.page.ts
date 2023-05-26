import { AfterViewInit , Component, OnInit } from '@angular/core';
import { Viaje } from 'src/app/interface/interface';
declare var  mapboxgl : any;

@Component({
  selector: 'app-pasajero',
  templateUrl: './pasajero.page.html',
  styleUrls: ['./pasajero.page.scss'],
})
export class PasajeroPage implements OnInit ,AfterViewInit  {

  markers!: any;
  map!: any;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.initMap();
    this.initMarker();
  }

  initMarker(){

    const MAPA = this.map;

    var viajes: Viaje[] = [];
        
    const v1: Viaje  = {
      destino:              "hospital Sotero del rio",
      monto_por_persona:    "1000",
      total_pasajeros:      "2",
      asientos_disponibles: "3",
      latitud:              "-33.57711348273336",
      longitud:             "-70.58174276640614" ,
    }

    const v2: Viaje  = {
      destino:              "San joaquin",
      monto_por_persona:    "1000",
      total_pasajeros:      "2",
      asientos_disponibles: "3",
      latitud:              "-33.47910916514122",
      longitud:             "-70.6414119826989" ,
    }

    viajes.push(v1);
    viajes.push(v2);

    viajes.forEach(function(value){

      const coordenadas : [number , number] = [+value.longitud , +value.latitud];
      const marker = new mapboxgl.Marker({color:'black' ,draggable: false })
        .setLngLat(coordenadas)
        .addTo(MAPA);
    
    });

  }  

  initMap(){

    mapboxgl.accessToken = 'pk.eyJ1IjoiZ3VpbGxlMDA3IiwiYSI6ImNsaTRvMjV0dTAwdTUzcnI0aGk0N3doMGIifQ.1H2-dw5WqRrTmrqp0PH2vA';
    
    const duocCord = [-70.57906424840523,-33.59857497310967 ];

    this.map = new mapboxgl.Map({
      container: 'map', // Specify the container ID
      style: 'mapbox://styles/mapbox/streets-v12', // Specify which map style to use
      center: duocCord, // Specify the starting position
      zoom: 14.5,
    })
    
    this.map.on('load' , () => {
      this.map.resize();
    });

    const marker = new mapboxgl.Marker({color:'red' ,draggable: false })
      .setLngLat(duocCord)
      .addTo(this.map);

  }

}
