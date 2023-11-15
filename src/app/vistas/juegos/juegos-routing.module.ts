import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JuegosComponent } from './juegos.component';
import { ListadoJuegosComponent } from './listado-juegos/listado-juegos.component';
import { DetalleJuegosComponent } from './detalle-juegos/detalle-juegos.component';

const routes: Routes = [
  {
    path: '', component: JuegosComponent, children: [
      { path: 'listado-juegos', component: ListadoJuegosComponent },
      { path: 'edit-juego/:id', component: DetalleJuegosComponent },
      { path: 'new-juego', component: DetalleJuegosComponent },
      { path: '', redirectTo: 'listado-juegos', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuegosRoutingModule { }
