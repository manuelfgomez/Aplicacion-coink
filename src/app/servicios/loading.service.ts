import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  loading:any;
  isLoading: boolean = false;
  constructor( public loadingController: LoadingController) { }
  async presentLoading() {
    this.isLoading = true;
    this.loading = await this.loadingController.create({
      message: 'Cargando...',
      duration: 100
    }).then(a => {
      a.present().then(() => {
        if (!this.isLoading) {
          a.dismiss();
        }
      });
    })
  }
  
  async closeLoading() {
    this.isLoading = false;
    if(this.loading != undefined){
      return await this.loading.dismiss();
    }
  }
}
