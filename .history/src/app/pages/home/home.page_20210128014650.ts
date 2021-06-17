import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import {Storage} from '@ionic/storage';
import { EventsService } from 'src/app/services/events/events.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

 
  loginModal: any;
  loggedin: boolean = false

  constructor(
  	public navCtrl: NavController,
  	public modalCtrl: ModalController,
    public storage: Storage,
    public events: EventsService
  	) {

  	console.log('home page')

    events.subscribe('user:login', data => {
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

 pushPage(page) {
    this.navCtrl.navigateForward('herstories');
    
  }

  async openLoginModal() {
    this.navCtrl.navigateForward('login');
    this.loginModal.present();
  }

  setLoginData( data ) {

    if( data.logout ) {
      this.loggedin = false
    } else if( data.success ) {
      this.loggedin = true
    }

  }

  ngOnInit() {
  }

}
