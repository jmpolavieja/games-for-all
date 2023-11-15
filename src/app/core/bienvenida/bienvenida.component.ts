import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Mensaje } from 'src/app/modelos/mensaje';
import { MensajeComponent } from 'src/app/shared/mensaje/mensaje.component';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent {

  mensaje: Mensaje;

  constructor(
    private modal: NgbModal
    ) {
    this.mensaje={titulo: 'Games For All', descripcion: 'Gracias por utilizar nuestro servicio de alquiler de juegos'};

  }

  ngOnInit() {
    /* const modelRef = this.modal.open(MensajeComponent, {
      size: 'lg',
      centered: true,
      windowClass: 'dark-modal'
    });
    modelRef.componentInstance.mensaje = this.mensaje;*/
  }
}
