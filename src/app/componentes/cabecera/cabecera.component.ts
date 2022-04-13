import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss'],
})
export class CabeceraComponent implements OnInit {
  @Input() titulo: string;
  @Input() barra: string;
  constructor(private location: Location) { }

  ngOnInit() {}

  regresar() {
    this.location.back();
  } 

}
