import { Component, OnInit, Input } from '@angular/core';
import { Imagen } from '../../../imagen'

@Component({
  selector: 'app-imagen',
  templateUrl: './imagen.component.html',
  styleUrls: ['./imagen.component.css']
})
export class ImagenComponent implements OnInit {

  @Input() item:Imagen
  @Input() indice:number

  constructor() { }

  ngOnInit() {
  }

}
