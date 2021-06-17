import { Component, ViewChild } from '@angular/core';

import { Platform, IonNav, MenuController, ModalController, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

// import { TabsPage } from '../pages/tabs/tabs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  @ViewChild(IonNav) nav: IonNav;
  menus: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public menu: MenuController,
    public modalCtrl: ModalController,
    public NavCntr:NavController
  ) {
    this.initializeApp();
    this.doMenus()
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  doMenus() {
    console.log('ok')
    this.menus = [{ title1: 'Home', slug: 'tabs/home', icon1: 'home' },{ title2: 'HERstories', slug: 'tabs/herstories', icon2: 'book' },{ title3: 'Daily Check In', slug: 'tabs/checkin', icon3: 'list' },{ title4: 'Contact', slug: 'tabs/contact', icon4: 'mail' }]
     this.NavCntr.navigateRoot( 'tabs' )
  }

  menuLink(item) {
    this.menu.close();
    this.NavCntr.navigateRoot(item.slug);
  }

 openLoginModal() {
  this.NavCntr.navigateForward('login')
  }
}
