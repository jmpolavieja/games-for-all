import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment.development';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AlquileresComponent } from './vistas/alquileres/alquileres.component';
import { ListadodetalleAlquilerComponent } from './vistas/alquileres/listadodetalle-alquiler/listadodetalle-alquiler.component';
import { MenuComponent } from './core/menu/menu.component';
import { MensajeComponent } from './shared/mensaje/mensaje.component';
import { BienvenidaComponent } from './core/bienvenida/bienvenida.component';
import { HeaderPrincipalComponent } from './core/header-principal/header-principal.component';
import { ContenedorBaseComponent } from './core/contenedor-base/contenedor-base.component';
import { ListadoAlquileresComponent } from './vistas/alquileres/listado/listado-alquileres.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MensajeComponent,
    BienvenidaComponent,
    HeaderPrincipalComponent,
    ContenedorBaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    NgbModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
