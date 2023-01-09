import { Component, OnInit } from '@angular/core';
import { Router , NavigationExtras } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {

  user: string = "";
  password: string = "";

  constructor(private toastController: ToastController, private router: Router) { }

  ngOnInit() {
  }

  login(){

    if(this.user.length < 1){
      this.toastError('Usuario no valido!!');
    }
    else if(this.password == "123456"){
      let data : NavigationExtras = {queryParams: {user: this.user}}
      this.router.navigate(["/home-page"] , data);
    } else{
      this.toastError('USUARIO O CONTRASEÑA INCORRECTOS!');
    }
    
  }

  async toastError(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 3000,
      color:"danger"
    });
    toast.present();
  }

}
