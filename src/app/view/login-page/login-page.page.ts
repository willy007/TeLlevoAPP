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
  isLoading = false;

  constructor(private toastController: ToastController, private router: Router , private api: ApiServiceService) { }

  ngOnInit() {
  }

  login(){

    this.isLoading = true;

    if(this.user.length < 1){
      this.toastError('Usuario no valido!!');
      this.isLoading = false;
    }else{
      this.api.login(this.user , this.password).subscribe((data)=>{
        if(data.result === "Login correcto"){
          window.localStorage.setItem("id_usuario",data.id_usuario );
          this.api.infoUser(data.id_usuario).subscribe((data)=>{
            if(data.result.tipo_usuario == "conductor"){
               this.router.navigate(["/home-page"]);
            }else if(data.result.tipo_usuario == "pasajero"){
              this.router.navigate(["/pasajero"]);
            }
            this.isLoading = false;
          })
         
          this.isLoading = false;
        }else{
          this.toastError('USUARIO O CONTRASEÑA INCORRECTOS!');
          this.isLoading = false;
        }
      });
    }
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
