import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiServiceService } from 'src/app/service/api-service.service';
import { User , Viaje} from '../../interface/interface';
import { ActionSheetController, AlertController, LoadingController } from '@ionic/angular';
import { Geolocation } from '@capacitor/geolocation';
declare var  mapboxgl : any;
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
})
export class HomePagePage implements OnInit ,AfterViewInit {

  user!: User ;
  marker!: [number , number] ; //longitude , latitude
  data: any = {
    destino : "",
    monto : 0,
    pasajeros : 0,
    markerlog : 0.0,
    markerlat : 0.0
  }
  menu:boolean = false;


  constructor(
    private api : ApiServiceService,
    private actionSheetCtrl: ActionSheetController,
    private router: Router,
    private toastController: ToastController) {

  }

  ngOnInit() {

  }

  ngAfterViewInit(){

    let idUser = window.localStorage.getItem("id_usuario");
    this.api.infoUser(idUser + "" ).subscribe((data)=>{
      if(data.result != "No hay ningun usuario creado"){
        const user: User = data.result;
        this.user = user;
      }
    });
    this.mapInit();
  }

  async btnHome(){
    const actionSheet = await this.actionSheetCtrl.create({

      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'cerrar sesion',
          handler: ()=>{
            window.localStorage.removeItem("id_usuario");
            this.router.navigate(['/login-page']);
          },
          data: {
            action: 'cancel',
          },
        },
      ],
    });
    actionSheet.present();
  }

  hidden(){
    this.menu = !this.menu;
  }

  async mapInit(){

    this.marker = [-70.57906424840523,-33.59857497310967 ];
    this.data.marker = this.marker;
    mapboxgl.accessToken = 'pk.eyJ1IjoiZ3VpbGxlMDA3IiwiYSI6ImNsaTRvMjV0dTAwdTUzcnI0aGk0N3doMGIifQ.1H2-dw5WqRrTmrqp0PH2vA';
    const map = new mapboxgl.Map({
      container: 'map', // Specify the container ID
      style: 'mapbox://styles/mapbox/streets-v12', // Specify which map style to use
      center: this.marker, // Specify the starting position
      zoom: 14.5, // Specify the starting zoom
    });

    map.on('load' , () => {
      map.resize();
    });

    new mapboxgl.Marker({color:'red' })
    .setLngLat(this.marker)
    .addTo(map);
    
    const marker = new mapboxgl.Marker({color:'red' ,draggable: true })
      .setLngLat(this.marker)
      .addTo(map);

    marker.on('dragend', ()=>{
      const markData =  marker.getLngLat();

      // -33.59857497310967, -70.57906424840523
      this.data.markerlog = markData.lng ;
      this.data.markerlat = markData.lat;
    });
  }

  viajar(){
    if(this.data.destino == "" || this.data.monto == 0 || this.data.pasajeros == 0){
      this.toastError("Campos vacios");
      return;
    }
   
    
    const viaje : Viaje = {
      destino : this.data.destino,
      latitud : this.marker[1].toString(),
      longitud : this.marker[0].toString(),
      monto_por_persona : this.data.monto.toString(),
      total_pasajeros : this.data.pasajeros.toString(),
      latitud_destino : this.data.markerlat.toString(),
      longitud_destino : this.data.markerlog.toString(),
      id_usuario : localStorage.getItem("id_usuario")!
    }

    console.log(viaje);

    this.api.crearVaje(viaje).subscribe((data)=>{
      if(data.result == "ok"){
        localStorage.setItem("viaje" , JSON.stringify(this.data));
        this.router.navigate(['conducto'])
      }else{
        this.toastError(data.mensaje)
      }
      console.log(data);
    })

  }

  async toastError(msg: string){
    const toast = await this.toastController.create({
      message: msg,
      duration: 3000,
      color:"danger"
    });
    toast.present();
  }

}
