import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActionSheetController, AlertController, IonSearchbar, isPlatform, LoadingController, MenuController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  users : any;

  constructor(private http: HttpClient,private alertCtrl?: AlertController) {}

  ngOnInit(){
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(res=>{
      this.users = res;
      console.log(res);
    })
  }
    
  rowClick(data){
     this.presentAlertConfirm(data.name);
  }

  dataClick(){
    this.presentAlertConfirm('Jay Khodiyar ma...!')
  }

  async presentAlertConfirm(message) {
    
    const alert = await this.alertCtrl.create({
      header: 'Name',
      message: message,
      buttons: [
        {
          text: "Ok",
          handler: () => {

          }
        }
      ]

    });
    await alert.present();
  }

}
