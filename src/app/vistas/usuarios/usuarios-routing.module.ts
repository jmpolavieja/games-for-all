import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleComponent } from './detalle/detalle.component';
import { ListadoComponent } from './listado/listado.component';
import { UsuariosComponent } from './usuarios.component';

const routes: Routes = [
  {
    path: '', component: UsuariosComponent, children: [
      { path: 'nuevo', component: DetalleComponent },
      { path: 'editUsuario/:id', component: DetalleComponent },
      { path: 'listaUsuarios', component: ListadoComponent },
      { path: '', redirectTo: 'listaUsuarios', pathMatch: 'full' }
    ]
  }

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
