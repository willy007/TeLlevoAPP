import { Component, OnInit } from '@angular/core';
import { Router , NavigationExtras } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ApiServiceService } from 'src/app/service/api-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {

  user: string = "";
  password: string = "";

  constructor(private toastController: ToastController, private router: Router , private api: ApiServiceService) { }

  ngOnInit() {
  }

  login(){

    if(this.user.length < 1){
      this.toastError('Usuario no valido!!');
    }
    
      
      //this.router.navigate(["/home-page"]);
    else{
      this.api.login(this.user , this.password).subscribe((data)=>{
        console.log(data);
      })
      //this.toastError('USUARIO O CONTRASEÑA INCORRECTOS!');
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
