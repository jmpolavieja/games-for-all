import { Component } from '@angular/core';
import { Juego } from 'src/app/modelos/juego';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-listado-juegos',
  templateUrl: './listado-juegos.component.html',
  styleUrls: ['./listado-juegos.component.css']
})
export class ListadoJuegosComponent {

  listJuegos: Juego[] = [];

  constructor(private fbs: FirebaseService){}

  ngOnInit() {
    this.fbs.coleccion = 'juegos';
    this.fbs.getCollection().subscribe( res => {
      console.log(res);
      this.listJuegos = res});
  }

  delJuego(id: string) {
    // Borrar e juego previo aviso y ok
    console.log('Esto borraría el juego ');
    this.fbs.coleccion = 'juegos';
    this.fbs.deleteDocument(id).then(() => console.log('juego borrado'));
  }
}
