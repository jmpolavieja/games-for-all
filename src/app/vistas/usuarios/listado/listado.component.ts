import { Component } from '@angular/core';
import { Usuario } from 'src/app/modelos/usuario';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  usuarios: Usuario[] = [];

  constructor(private fbs: FirebaseService){}

  ngOnInit() {
    this.fbs.coleccion = 'usuarios';
    this.fbs.getCollection().subscribe(
      res => this.usuarios = res
    );
  }

  delUser(id: string) {
    this.fbs.coleccion = 'usuarios';
    this.fbs.deleteDocument(id).then(() => console.log('Usuario borrado'));
  }
}
