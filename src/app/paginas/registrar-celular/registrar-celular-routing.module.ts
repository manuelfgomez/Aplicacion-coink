import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarCelularPage } from './registrar-celular.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarCelularPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrarCelularPageRoutingModule {}
