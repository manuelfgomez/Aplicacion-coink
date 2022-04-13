import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.page.html',
  styleUrls: ['./ingreso.page.scss'],
})
export class IngresoPage implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }

  agregarLog(){
    let accion = [{accion: 'Click en Regístrarse'}];
    // Se crea almacenamiento local para almacenar los logs
    window.localStorage.setItem("log", JSON.stringify(accion));
  }

  registrarse(){
    this.agregarLog();
    this.router.navigateByUrl('/registrar-celular');
  }

}