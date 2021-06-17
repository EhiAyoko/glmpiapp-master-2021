import { Component, OnInit } from '@angular/core';
import { NavController, ModalController,PopoverController } from '@ionic/angular';
import {Storage} from '@ionic/storage';
import { EventsService } from 'src/app/services/events/events.service';
import { LoginComponent } from 'src/app/components/login/login.component';

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
    public events: EventsService,
    public popoverCtrl: PopoverController
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
    const popover = await this.modalCtrl.create({
      component: LoginComponent,
      cssClass: 'fullscreen',
    });
    popover.present();
    popover.onDidDismiss();
 
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
