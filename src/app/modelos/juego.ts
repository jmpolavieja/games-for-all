export interface Juego {
    id: string;
    nombre: string;
    tipo: string;
    precio: number;
    estado: string;
    alquilado: boolean;
    imagen?: string;
}
