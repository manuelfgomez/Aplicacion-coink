import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'src/app/servicios/data.service';
import { LoadingService } from 'src/app/servicios/loading.service';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { compararCampos } from 'src/app/validaciones/comparar-campos';
import { TipoDocumento } from 'src/app/modelos/tipo-documento.model';
import { Genero } from 'src/app/modelos/genero.model';
@Component({
  selector: 'app-datos-cuenta',
  templateUrl: './datos-cuenta.page.html',
  styleUrls: ['./datos-cuenta.page.scss'],
})
export class DatosCuentaPage implements OnInit {
  documentos: TipoDocumento;
  generos: Genero;
  formulario !:FormGroup;
  typePin: string = "password";
  img: string = "md-eye-off.svg";
  typeConfirmarPin: string = "password";
  imgConfirmarPin: string = "md-eye-off.svg";
  constructor(private dataService: DataService, private loading: LoadingService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.construirFormulario();
    this.obtenerTiposDocumento();
    this.obtenerGeneros();
  }

  construirFormulario(){
    this.formulario = this.fb.group({
      tipoDocumento: ['', [Validators.required]],
      numeroDocumento: ['', [Validators.required]],
      fechaExpedicion: ['', [Validators.required]],
      fechaNacimiento: ['', [Validators.required]],
      genero: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.email]],
      confirmarCorreo: ['', [Validators.required, Validators.email]],
      pin: ['', [Validators.required]],
      confirmarPin: ['', [Validators.required]]
    }, { validators: [compararCampos('pin', 'confirmarPin'), compararCampos('correo', 'confirmarCorreo')]});
  }

  obtenerTiposDocumento(){
    this.loading.presentLoading();
    // Se llama al servicio y se consume el API
    this.dataService.getDocumentTypes().subscribe( (response:any) =>{
      this.documentos = response;
      this.loading.closeLoading();
    })
  }

  obtenerGeneros(){
    this.loading.presentLoading();
    this.dataService.getGenders().subscribe( (response:any) =>{
      this.generos = response;
      this.loading.closeLoading();
    })
  }

  registrar(){
    this.agregarLog();
    this.router.navigateByUrl('/contrato');
  }

  agregarLog(){
    let acciones = JSON.parse(localStorage.getItem("log"));
    acciones.push({accion: 'Datos de la cuenta completados'});
    window.localStorage.setItem("log", JSON.stringify(acciones));
  }

  togglePin(){
    if(this.typePin == "password"){
      this.typePin = "text";
      this.img = "remove-red-eye.svg";
    }else{
      this.typePin = "password";
      this.img = "md-eye-off.svg";
    }
  }

  toggleConfirmarPin(){
    if(this.typeConfirmarPin == "password"){
      this.typeConfirmarPin = "text";
      this.imgConfirmarPin = "remove-red-eye.svg";
    }else{
      this.typeConfirmarPin = "password";
      this.imgConfirmarPin = "md-eye-off.svg";
    }
  }

}