import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContratoPageRoutingModule } from './contrato-routing.module';

import { ContratoPage } from './contrato.page';
import { CabeceraComponent } from 'src/app/componentes/cabecera/cabecera.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContratoPageRoutingModule
  ],
  declarations: [ContratoPage, CabeceraComponent]
})
export class ContratoPageModule {}
