import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiServiceService } from 'src/app/service/api-service.service';
import { User } from '../../interface/interface';
import { ActionSheetController, AlertController, LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
})
export class HomePagePage implements OnInit ,AfterViewInit {

  user: User | undefined;

  constructor(private api : ApiServiceService,private actionSheetCtrl: ActionSheetController,private router: Router) {

  }

  ngOnInit() {

  }

  ngAfterViewInit(){
    let idUser = window.localStorage.getItem("id_usuario");
    console.log(idUser);
    this.api.infoUser(idUser + "" ).subscribe((data)=>{
      console.log(data);
      if(data.result != "No hay ningun usuario creado"){
        const user: User = data.result;
        this.user = user;
      }
    });
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

}
