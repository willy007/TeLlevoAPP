import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { User } from 'src/app/interface/interface';
import { ApiServiceService } from 'src/app/service/api-service.service';

@Component({
  selector: 'app-registro-page',
  templateUrl: './registro-page.page.html',
  styleUrls: ['./registro-page.page.scss'],
})
export class RegistroPagePage implements OnInit {

  isLoading = false;
  user: User = {
    rut: "",
    nombre: "",
    apellidos: "",
    correo: "",
    password: "",
    tipo_usuario: ""
  }


  constructor(private toastController: ToastController, private router: Router, private api:ApiServiceService) { }

  ngOnInit() {
  }

  registro(){
    if (
    this.user.tipo_usuario === "" ||
    this.user.rut === "" ||
    this.user.nombre === "" ||
    this.user.apellidos === ""||
    this.user.correo === "" ||
    this.user.password === ""){
      this.toastError("Campos vacios.. Verifique los campos");
      return
    }
    this.isLoading = true;
    this.api.registro(this.user).subscribe((data) => {
      if (data.result === "usuario creado"){
        this.router.navigate(["/login-page"]);
        this.toastPrimary(data.result);
      }else {
        this.toastError("error al crear Usuario");
      }
      this.isLoading = false;
    });

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
