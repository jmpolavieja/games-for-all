import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './core/bienvenida/bienvenida.component';

const routes: Routes = [
  { path: '', component: BienvenidaComponent },
  { path: 'usuarios', loadChildren: () => import('./vistas/usuarios/usuarios.module').then(m => m.UsuariosModule)},
  { path: 'alquileres', loadChildren: () => import('./vistas/alquileres/alquileres.module').then(m => m.AlquileresModule)},
  { path: 'juegos', loadChildren: () => import('./vistas/juegos/juegos.module').then(m => m.JuegosModule)},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
