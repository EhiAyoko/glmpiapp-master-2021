import { Component } from '@angular/core';
import { NavController, ModalController,PopoverController } from '@ionic/angular';
import {Storage} from '@ionic/storage';
import { EventsService } from 'src/app/services/events/events.service';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  loggedin: boolean = false

  constructor(	public navCtrl: NavController,
  	public modalCtrl: ModalController,
    public storage: Storage,
    public events: EventsService,
    public popoverCtrl: PopoverController) {

    this.ionViewDidEnter()
  	console.log('home page')

    events.subscribe('user:login', data => {
      console.log('ascasc', this.setLoginData(data))
      this.setLoginData(data);
    });
  }

  ionViewDidEnter() {
    this.storage.get('user_login').then( data => {
      if( data ) {
        // do checks here
        this.loggedin = true
      } else {
        this.loggedin = false
      }
    })
  }
 setLoginData( data ) {
    if( data.logout ) {
      this.loggedin = false
    } else if( data.success ) {
      this.loggedin = true
    }
  }
}
