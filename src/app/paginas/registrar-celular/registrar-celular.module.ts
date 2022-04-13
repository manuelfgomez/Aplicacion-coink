import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarCelularPageRoutingModule } from './registrar-celular-routing.module';

import { RegistrarCelularPage } from './registrar-celular.page';
import { CabeceraComponent } from 'src/app/componentes/cabecera/cabecera.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarCelularPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RegistrarCelularPage, CabeceraComponent]
})
export class RegistrarCelularPageModule {}
