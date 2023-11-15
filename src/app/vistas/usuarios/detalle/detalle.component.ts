import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Mensaje } from 'src/app/modelos/mensaje';
import { Usuario } from 'src/app/modelos/usuario';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent {

  user: Usuario;
  mensaje?: Mensaje;
  id: string = '';
  nuevo = true;

  constructor(
    private fbs: FirebaseService,
    private ruta: ActivatedRoute,
    private ruter: Router,
    private model: NgbModal,
    private location: Location
  ){
    this.user= {
      id: '',
      nombre: '',
      telefono: '',
      email: '',
      dni: '',
      direccion: '',
      ciudad: '',
      provincia: '',
      cp: ''
    };
  }

  ngOnInit() {
    if(this.ruta.snapshot.paramMap.get('id')){
      // Hay parámetro en la ruta
      this.nuevo = false;
      this.id = this.ruta.snapshot.paramMap.get('id')!;
      // Cargar el usuario del id
      this.fbs.coleccion = 'usuarios';
      this.fbs.getDocument(this.id).subscribe (res => this.user = res);
    }else{
      //Nuevo usuario
      this.nuevo = true;
    }
  }

  onSubmit() {
    //Este decide si es nuevo o es actualización
    if(this.nuevo){
      this.addUser();
    }else{
      this.updateUser();
    }
    this.ruter.navigateByUrl('/usuarios/listaUsuarios');
  }

  updateUser(){
    this.fbs.coleccion = 'usuarios';
    this.fbs.updateDocument(this.user)
      .then(() => console.log('Usuario actualizado'))
      .catch((error) => console.error(error));
  }

  addUser() {
    this.fbs.coleccion = 'usuarios';
    this.fbs.addDocument(this.user)
      .then(() => console.log('usuario añadido exitosamente'))
      .catch((error) => console.error(error));
  }

  goBack(): void {
    this.location.back();
  }
}
