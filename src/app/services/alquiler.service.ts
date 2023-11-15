import { Injectable } from '@angular/core';
import { Alquiler, DatosAlquiler } from '../modelos/alquiler';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class AlquilerService {

  dataAlquileres: DatosAlquiler[] = [];
  alquilerSeleccionado: any;
  alquiler: Alquiler = {
    id: '',
    fechaAlquiler: '',
    fechaDevolucion: '',
    recargo: false,
    idUsuario: '',
    idJuego: '',
    precioFinal: '',
    alquilado: false
};

  constructor(private fbs: FirebaseService) { }

  // Recibir la lista de alquileres de la base de datos y empezar a montar el dataAlquileres
  setAlquileres(alquileres: Alquiler[]) {
    alquileres.forEach((alquiler: Alquiler) => {
      // this.alquilerSeleccionado = {
      //   id: '',
      //   alquilado: true,
      //   alquiler: alquiler,
      // };
      this.fbs.coleccion = 'usuarios';
      this.fbs.getDocument(alquiler.idUsuario!).subscribe(user => {
        this.fbs.coleccion = 'juegos';
        this.fbs.getDocument(alquiler.idJuego!).subscribe(game => {
          this.alquilerSeleccionado! = { id: '', alquilado: true, alquiler: alquiler, idUsuario:  user.id, juego: game.id};
          console.log(this.alquilerSeleccionado);
          //return this.alquilerSeleccionado;
        });
      });
    });
  }

  newAlquiler(alquiler: Alquiler) {
    // Tomar lo necesario y guardar
    
  }
}
