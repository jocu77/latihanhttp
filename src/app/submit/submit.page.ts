import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.page.html',
  styleUrls: ['./submit.page.scss'],
})
export class SubmitPage{
  toastCtrl: any;
  loading: any;
  dataPOST = [];
  post: any = {};

  constructor(
    private http: HttpClient,
    private loadCtrl: LoadingController
  ) { }


  submit()
  {
    this.http.get('https://reqres.in/api/unknown').subscribe((res: any) => {
      console.log(res);
      this.toastCtrl.create({
        duration: 3000,
        message: 'ID for new Item is '+ res.id
      }).then(l => l.present());
  });
  }

}
