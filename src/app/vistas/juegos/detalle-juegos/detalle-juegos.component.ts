import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Juego } from 'src/app/modelos/juego';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Mensaje } from 'src/app/modelos/mensaje';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MensajeComponent } from 'src/app/shared/mensaje/mensaje.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-detalle-juegos',
  templateUrl: './detalle-juegos.component.html',
  styleUrls: ['./detalle-juegos.component.css']
})
export class DetalleJuegosComponent implements OnInit {

  id: string = '';
  juego: Juego = {id: '', nombre: '', tipo: '', estado: '', precio: 0, alquilado: false};
  mensaje?: Mensaje;
  nuevo = true;
  
  constructor(
    private fsb: FirebaseService,
    private ruta: ActivatedRoute,
    private ruter: Router,
    private modal: NgbModal
    ){}
  
  ngOnInit() {
    if(this.ruta.snapshot.paramMap.get('id')) {
      console.log('hay id en la ruta');
      this.id = this.ruta.snapshot.paramMap.get('id')!;
      this.fsb.coleccion = 'juegos';
      this.fsb.getDocument(this.id).subscribe( res => this.juego = res);
      this.nuevo = false;
    }
  }

  onUpdate(form: NgForm) {
    console.log(form.value);
    this.fsb.coleccion = 'juegos';
    if(this.nuevo){// Si es nuevo, uso addDocument
      this.addJuego();
    }else {
      console.log(form.value);
      this.fsb.updateDocument(form.value)
      .then(() => {
        this.mensaje = {titulo: 'Guardando Juego', descripcion: 'El juego ha sido guardado con éxito'};
        this.muestraMensaje(this.mensaje);
      })
      .catch((error) => {
        this.mensaje = {titulo: 'Guardando Juego', descripcion: 'Ha habido un error ' + error};
        this.muestraMensaje(this.mensaje)
      });
      this.ruter.navigateByUrl('/juegos/listado-juegos');
    }
    
  }

  addJuego() {
    this.fsb.coleccion = 'juegos';
    this.fsb.addDocument(this.juego)
      .then(() => {
        this.mensaje = {titulo: 'Guardando Juego', descripcion: 'El juego ha sido creado con éxito'};
        this.muestraMensaje(this.mensaje);
      })
      .catch((error) => {
        this.mensaje = {titulo: 'Guardando juego', descripcion: 'El juego no se ha podido guardar. Error: ' + error};
        this.muestraMensaje(this.mensaje);
      });
      this.ruter.navigateByUrl('/juegos/listado-juegos');
  }

  muestraMensaje(mensaje: Mensaje){
    const modelRef = this.modal.open(MensajeComponent, {
      size: 'lg',
      centered: true,
      windowClass: 'dark-modal'
    });
    modelRef.componentInstance.mensaje = mensaje;
    
  }

  setPrice(juego: Juego, precio: number){
    this.fsb.modificaPrecioJuego(juego, precio);
  }
}
