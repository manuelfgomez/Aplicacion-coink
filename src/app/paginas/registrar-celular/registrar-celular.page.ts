import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-celular',
  templateUrl: './registrar-celular.page.html',
  styleUrls: ['./registrar-celular.page.scss'],
})
export class RegistrarCelularPage implements OnInit {
  formulario !:FormGroup;
  constructor( private fb : FormBuilder, private router: Router) { }

  ngOnInit() {
    this.formulario = this.fb.group({numeroCelular: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]]});
  }

  backSpace(){
    let longitud =  this.formulario.value.numeroCelular.length;
    let numero = this.formulario.value.numeroCelular.substring(0,longitud - 1);
    this.formulario.patchValue({numeroCelular: numero});
  }

  agregarNumero(numero:string){
    let numeroCelular = this.formulario.value.numeroCelular + numero;
    this.formulario.patchValue({numeroCelular:numeroCelular});
  }

  registrar(){
    this.agregarLog();
    this.router.navigateByUrl('/datos-cuenta');
  }

  agregarLog(){
    let acciones = JSON.parse(localStorage.getItem("log"));
    acciones.push({accion: 'Número de celular agregado'});
    window.localStorage.setItem("log", JSON.stringify(acciones));
  }

}