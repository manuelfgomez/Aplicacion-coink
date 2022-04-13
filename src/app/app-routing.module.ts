import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'ingreso',
    pathMatch: 'full'
  },
  {
    path: 'ingreso',
    loadChildren: () => import('./paginas/ingreso/ingreso.module').then( m => m.IngresoPageModule)
  },
  {
    path: 'registrar-celular',
    loadChildren: () => import('./paginas/registrar-celular/registrar-celular.module').then( m => m.RegistrarCelularPageModule)
  },
  {
    path: 'datos-cuenta',
    loadChildren: () => import('./paginas/datos-cuenta/datos-cuenta.module').then( m => m.DatosCuentaPageModule)
  },
  {
    path: 'contrato',
    loadChildren: () => import('./paginas/contrato/contrato.module').then( m => m.ContratoPageModule)
  },
  {
    path: 'registro-exitoso',
    loadChildren: () => import('./paginas/registro-exitoso/registro-exitoso.module').then( m => m.RegistroExitosoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
