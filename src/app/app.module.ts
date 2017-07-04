import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceimagenService } from './serviceimagen.service'

import { AppComponent } from './app.component';
import { ContenedorComponent } from './contenedor/contenedor.component';
import { PortadaComponent } from './contenedor/portada/portada.component';
import { GaleriaComponent } from './contenedor/galeria/galeria.component';
import { FooterComponent } from './contenedor/footer/footer.component';
import { ImagenComponent } from './contenedor/galeria/imagen/imagen.component';

@NgModule({
  declarations: [
    AppComponent,
    ContenedorComponent,
    PortadaComponent,
    GaleriaComponent,
    FooterComponent,
    ImagenComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ServiceimagenService],
  bootstrap: [ContenedorComponent]
})
export class AppModule { }
