import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JuegosRoutingModule } from './juegos-routing.module';
import { FormsModule } from '@angular/forms';
import { ListadoJuegosComponent } from './listado-juegos/listado-juegos.component';
import { DetalleJuegosComponent } from './detalle-juegos/detalle-juegos.component';
import { JuegosComponent } from './juegos.component';


@NgModule({
  declarations: [
    ListadoJuegosComponent,
    DetalleJuegosComponent,
    JuegosComponent
  ],
  imports: [
    CommonModule,
    JuegosRoutingModule,
    FormsModule
  ]
})
export class JuegosModule { }
