import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlquileresRoutingModule } from './alquileres-routing.module';
import { AlquileresComponent } from './alquileres.component';
import { ListadoAlquileresComponent } from './listado/listado-alquileres.component';
import { ListadodetalleAlquilerComponent } from './listadodetalle-alquiler/listadodetalle-alquiler.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AlquileresComponent,
    ListadoAlquileresComponent,
    ListadodetalleAlquilerComponent
  ],
  imports: [
    CommonModule,
    AlquileresRoutingModule,
    FormsModule
  ]
})
export class AlquileresModule { }
