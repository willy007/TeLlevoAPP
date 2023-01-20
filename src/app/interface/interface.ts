export interface User {
    id? : string;
    nombre: string;
    rut: string;
    apellidos: string;
    correo: string;
    password: string;
    tipo_usuario: string; // (conductor o pasajero)
    token_alumno?: string;

}
