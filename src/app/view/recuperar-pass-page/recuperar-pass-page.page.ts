import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ApiServiceService } from 'src/app/service/api-service.service';

@Component({
  selector: 'app-recuperar-pass-page',
  templateUrl: './recuperar-pass-page.page.html',
  styleUrls: ['./recuperar-pass-page.page.scss'],
})
export class RecuperarPassPagePage implements OnInit {


  mail: string = "";

  constructor(private toastController: ToastController, private router: Router , private api: ApiServiceService) { }

  ngOnInit() {
  }

  Restaurar() {
    if (this.mail.length <= 3) {
      this.toastError("Correo no valido");
      return;
    }else {
      this.api.recuperarPass(this.mail).subscribe((data)=>{
        if(data.result == "password modificada correctamente"){
          this.router.navigate(["/login-page"]);
          this.toastPrimary("Correo enviado");
        }else{
          this.toastError("El Correo no existe");
        }
        console.log(data);
      })
    }

  }

  async toastError(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 4000,
      color: "danger"
    });
    toast.present();
  }

  async toastPrimary(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 3000,
      color: "primary"
    });
    toast.present();
  }

}
