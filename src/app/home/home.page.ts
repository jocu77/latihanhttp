/* eslint-disable @typescript-eslint/member-ordering */
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  loading: any;
  toastCtrl: any;

  constructor(
    private http: HttpClient,
    private loadCtrl: LoadingController
  ) {}

  ionViewDidEnter(){
    this.getDataPost();
  }

  dataPOST = [];
  post: any = {};

  public async loaderPresent(): Promise<any>
  {
    const loading = await this.loadCtrl.create({
      message: 'LOADING ...',
      backdropDismiss: true
    });
    await loading.present();

    return loading;
  }

  async getDataPost() {
    this.loading = await this.loaderPresent();

    this.http.get('https://reqres.in/api/unknown').subscribe((res: any) => {
      console.log(res);

      this.dataPOST = res['data'];
      if(this.loading) {
        this.loading.dismiss();
      }
  });
}

}
