import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registro-page',
  templateUrl: './registro-page.page.html',
  styleUrls: ['./registro-page.page.scss'],
})
export class RegistroPagePage implements OnInit {

  user: string = "";
  password: string = "";
  repassword: string = "";

  constructor(private toastController: ToastController, private router: Router) { }

  ngOnInit() {
  }

  Restaurar(){
    if(this.user != "user"){
      this.toastError("El usuario no existe")
      return;
    }else if(this.password != this.repassword){
      this.toastError("Las contraseñas no so identicas")
    }else if(this.password.length < 6 ){
      this.toastError("Contraseña debe ser mayor a 6 caracteres")
    }else{
      this.router.navigate(["/login-page"])
      this.toastPrimary("contraseña Cambiada correctamente")
    }

  }

  async toastError(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 4000,
      color:"danger"
    });
    toast.present();
  }

  async toastPrimary(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 3000,
      color:"primary"
    });
    toast.present();
  }

}
