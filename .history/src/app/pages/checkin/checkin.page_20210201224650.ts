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

  async happymood() {
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

  async inocentmood() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      // header: 'Checkbox',
      message: '<strong>Sarcasm,Irony,Humor, and Silliness, we all get that way sometimes, Take breathers and remember to not give up today</strong>',
      
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

  async silentmood() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      // header: 'Checkbox',
      message: '<strong>Whew, Girls. We have all been there. Stay strong</strong>',
      
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


  async randommood() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      // header: 'Checkbox',
      message: '<strong>Ugh. This too shall pass. Get some tea. Read a nice book. And get yourself together</strong>',
      
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


  async saddmood() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      // header: 'Checkbox',
      message: '<strong>Sometimes we need to take a moment before doing anything we might regret</strong>',
      
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


  async angrymood() {
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
