import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contrato',
  templateUrl: './contrato.page.html',
  styleUrls: ['./contrato.page.scss'],
})
export class ContratoPage implements OnInit {
  aceptoContrato:boolean = true;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  aceptar(){
    this.agregarLog();
    this.mostrarLog();
    this.router.navigateByUrl('registro-exitoso');
  }

  agregarLog(){
    let acciones = JSON.parse(localStorage.getItem("log"));
    acciones.push({accion: 'Registro exitoso'});
    window.localStorage.setItem("log", JSON.stringify(acciones));
  }
  
  mostrarLog(){
    let logs = JSON.parse(localStorage.getItem("log"))
      //Mostrando log
      logs.forEach( function(log, index) {
        console.log(`Acción ${index}: ${log.accion}`);
    });
  }

}