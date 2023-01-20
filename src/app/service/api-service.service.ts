import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, pipe, retry } from 'rxjs';
import { User } from '../interface/interface';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  URL = "https://duoc.grupodevcon.cl/API/v2/";
  TOKEN = "4";

  constructor(private http : HttpClient) { }

  registro(u: User):Observable<any>{
    u.token_alumno = this.TOKEN;
    return this.http.post(this.URL + "crearUsuario" , u).pipe();
  }

  login(user:string ,pwd: string):Observable<any>{
    let data = {
      correo: user,
      password: pwd,
      token_alumno: this.TOKEN
    }
    return this.http.post(this.URL + "loginUsuario" , data).pipe(); 
  }

  recuperarPass(user : string):Observable<any>{
    let data = {
      correo: user,
      token_alumno: this.TOKEN
    }
    return this.http.post(this.URL + "recuperarPassword" , data).pipe();
  }

  listUser():Observable<any>{
    return this.http.get(this.URL+ "obtenerUsuarios/" + this.TOKEN).pipe(retry(3))
  }

  infoUser(id : string){ 
    return this.http.get(this.URL+ "obtenerUsuarios/"+ id+ "/"+ this.TOKEN).pipe(retry(3))
  }

}
