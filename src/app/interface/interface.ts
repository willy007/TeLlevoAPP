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

export interface Viaje {
    id_viaje?:            string;
    id_usuario?:           string ;
    destino:              string;
    monto_por_persona:    string;
    total_pasajeros:      string;
    asientos_disponibles?:string;
    latitud:              string;
    longitud:             string;
    latitud_destino:      string;
    longitud_destino:     string;
    token?: string
}
