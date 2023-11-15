import { Juego } from "./juego";
import { Usuario } from "./usuario";

export interface Alquiler {
    id: string;
    alquilado: boolean;
    fechaAlquiler?: string;
    fechaDevolucion?: string;
    recargo?: boolean;
    idUsuario?: string;
    idJuego?: string;
    precioFinal?: string;
    
}

export interface DatosAlquiler {
    alquilado: boolean;
    alquiler?: Alquiler;
    juego?: Juego;
    usuario?: Usuario;
}

