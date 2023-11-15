import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Juego } from 'src/app/modelos/juego';
import { Usuario } from 'src/app/modelos/usuario';
import { AlquilerService } from 'src/app/services/alquiler.service';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-listadodetalle-alquiler',
  templateUrl: './listadodetalle-alquiler.component.html',
  styleUrls: ['./listadodetalle-alquiler.component.css']
})
export class ListadodetalleAlquilerComponent {
  public alquiler: any;
  nuevo = true;
  usuarios: Usuario[] = [];
  juegos: Juego[] = [];

  constructor(
    private alquilerSvc: AlquilerService,
    private afs: FirebaseService,
    private rutaActiva: ActivatedRoute
  ) {
    this.alquiler = this.alquilerSvc.alquiler;
  }


  ngOnInit() {
    if (this.rutaActiva.snapshot.paramMap.get('id')) {
      // Hay id, cargar el registro
      this.afs.coleccion = 'alquileres';
      const id = this.rutaActiva.snapshot.paramMap.get('id') || '';
      this.afs.getDocument(id).subscribe(res => this.alquiler = res);
    } else {
      // No hay id, nuevo alquiler
    }
    // cargar los usuarios
    this.afs.coleccion = 'usuarios';
    this.afs.getCollection().subscribe(
      resUser => { this.usuarios = resUser; console.log('dame usuarios') }
    );
    this.afs.coleccion = 'juegos';
    this.afs.getCollection()
      .subscribe(resGame => {
        this.juegos = resGame
      });

  }
  // Nuevo alquiler
  saveAlquiler() {
    console.log(this.alquiler);
    this.afs.coleccion = 'alquileres';
    this.afs.addDocument(this.alquiler)
      .then(() => alert('alquiler guardado'))
      .catch(error => console.error(error));
  }
}
