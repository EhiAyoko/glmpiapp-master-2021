import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.page.html',
  styleUrls: ['./checkin.page.scss'],
})
export class CheckinPage implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlertCheckbox() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      // header: 'Checkbox',
      message: '<strong>That is awesome that you are feeling great today! keep it up!!!</strong>',
      
      buttons: [
       {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }
}
