import { Component, ViewChild } from '@angular/core';

import { Platform, IonNav, MenuController, ModalController, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import {Storage} from '@ionic/storage';
import { EventsService } from 'src/app/services/events/events.service';
// import { TabsPage } from '../pages/tabs/tabs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  @ViewChild(IonNav) nav: IonNav;

  loggedin: boolean = false

  menus: any;
  menus2: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public menu: MenuController,
    public modalCtrl: ModalController,
    public NavCntr:NavController,
    public storage: Storage,
    public events: EventsService,
   
  ) {
    this.initializeApp();
    this.doMenus()
    this.doMenus2()

    this.ionViewDidEnter()
  	console.log('home page')

    events.subscribe('user:login', data => {
      console.log('ascasc', this.setLoginData(data))
      this.setLoginData(data);
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  doMenus() {
    console.log('ok')
    this.menus = [{ title: 'Home', slug: 'tabs/home', icon: 'home' },{ title: 'HERstories', slug: 'tabs/herstories', icon: 'book' },{ title: 'Daily Check In', slug: 'tabs/checkin', icon: 'list' },{ title: 'Contact', slug: 'tabs/contact', icon: 'mail' }]
     this.NavCntr.navigateRoot( 'tabs' )
  }
  doMenus2() {
    console.log('ok2')
    this.menus2 = [{ title: 'Home', slug: 'tabs/home', icon: 'home' },{ title: 'Contact', slug: 'tabs/contact', icon: 'mail' }]
     this.NavCntr.navigateRoot( 'tabs' )
  }

  menuLink(item) {
    this.menu.close();
    this.NavCntr.navigateRoot(item.slug);
  }

 openLoginModal() {
  this.NavCntr.navigateForward('login')
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
