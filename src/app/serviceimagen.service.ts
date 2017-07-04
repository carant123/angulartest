import { Injectable } from '@angular/core';
import { Imagen } from './imagen';

@Injectable()
export class ServiceimagenService {
  imagenes:Array<Imagen> = []

  constructor() { 
    this.imagenes.push(
      new Imagen("Imagen1","direccion")
    )

    this.imagenes.push(
      new Imagen("Imagen1","direccion")
    )
    
    this.imagenes.push(
      new Imagen("Imagen1","direccion")
    )

    this.imagenes.push(
      new Imagen("Imagen1","direccion")
    )

    this.imagenes.push(
      new Imagen("Imagen1","direccion")
    )

    this.imagenes.push(
      new Imagen("Imagen1","direccion")
    )
  }

  listarImagenes():Array<Imagen> {
    return this.imagenes.slice()
  }

  obtenerImagenes(indice:number):Imagen {
    //return this.bares[indice]
   return this.imagenes.slice(indice, indice+1)[0]
  }

}
