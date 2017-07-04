import { Component, OnInit } from '@angular/core';
import { ServiceimagenService } from '../../serviceimagen.service';
import { Imagen } from '../../imagen'

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  imagenes:Array<Imagen>

  constructor(private galeria:ServiceimagenService) { 
    this.imagenes = galeria.listarImagenes()
  }

  ngOnInit() {
  }

}
