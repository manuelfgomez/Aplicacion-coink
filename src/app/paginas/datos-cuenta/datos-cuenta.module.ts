import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatosCuentaPageRoutingModule } from './datos-cuenta-routing.module';

import { DatosCuentaPage } from './datos-cuenta.page';
import { CabeceraComponent } from 'src/app/componentes/cabecera/cabecera.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatosCuentaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [DatosCuentaPage, CabeceraComponent]
})
export class DatosCuentaPageModule {}
