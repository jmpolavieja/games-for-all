import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlquileresComponent } from './alquileres.component';
import { ListadoAlquileresComponent } from './listado/listado-alquileres.component';
import { ListadodetalleAlquilerComponent } from './listadodetalle-alquiler/listadodetalle-alquiler.component';

const routes: Routes = [
  {
    path: '', component: AlquileresComponent, children: [
      { path: 'listado-alquileres', component: ListadoAlquileresComponent },
      { path: 'edit-alquiler/:id', component: ListadodetalleAlquilerComponent },
      { path: 'new-alquiler', component: ListadodetalleAlquilerComponent },
      { path: '', redirectTo: 'listado-alquileres', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlquileresRoutingModule { }
