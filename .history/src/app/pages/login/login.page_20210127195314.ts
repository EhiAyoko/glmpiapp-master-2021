import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, LoadingController, PopoverController } from '@ionic/angular';
import { LoginService } from 'src/app/services/login/login.service';
import { Storage } from '@ionic/Storage';
import { EventsService } from 'src/app/services/events/events.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

	login: any = {}
	spinner: any;
	loggedin: boolean = false

	constructor(
		public navCtrl: NavController,
		public toastCtrl: ToastController,
		private loginProvider: LoginService,
		public loadingCtrl: LoadingController,
		public viewCtrl: PopoverController ,
		public storage: Storage,
		public events: EventsService
	) {
	}
  ngOnInit() {
  }
	ionViewDidLoad() {
		this.start()
	}

	start() {

		this.storage.get('user_login').then(data => {
			if (data) {
				// do checks here
				this.loggedin = true
			} else {
				this.loggedin = false
			}
		})

	}

	doLogin() {

		if (!this.login)
			this.presentToast('Please enter a valid login.');

		this.showSpinner()

		this.loginProvider.login(this.login).then(response => {

			if (!response || (<any>response).success === false) {
				this.loginErr(response)
				return;
			}

			let login_data = (<any>response).data;

			console.log('login_data ', login_data)

			if (login_data.success == true) {
				localStorage.setItem('isLogin', login_data.success)
			}
			this.presentToast(login_data.message);
			this.events.publish('user:login', login_data)
			this.storage.set('user_login', login_data)
			this.dismiss()

			this.hideSpinner()

		}, (err) => {

			this.hideSpinner()
			this.loginErr(err)

		}).catch(e => {
			console.warn(e)
			this.hideSpinner()
			this.presentToast('There was a problem connecting to the server.');
		})

		// make sure spinner disappears even if there's a problem
		setTimeout(() => {
			this.hideSpinner();
		}, 5000);
	}

	doLogout() {

		this.showSpinner()

		this.loginProvider.login({}, true).then(response => {

			if (!response || (<any>response).success === false) {
				this.loginErr(response)
				return;
			}

			let login_data = (<any>response).data;

			console.log(login_data)

			this.presentToast(login_data.message)
			this.events.publish('user:login', login_data)
			this.storage.remove('user_login')
			this.dismiss()

			this.hideSpinner()

		}, (err) => {

			this.hideSpinner()
			this.loginErr(err)

		}).catch(e => {
			console.warn(e)
			this.hideSpinner()
			this.presentToast('There was a problem connecting to the server.');
		})

		// make sure spinner disappears even if there's a problem
		setTimeout(() => {
			this.hideSpinner();
		}, 5000);

	}

	loginErr(err) {

		console.log(err)

		this.hideSpinner()

		this.presentToast(err.data.message);

	}

	dismiss() {
    // this.viewCtrl.dismiss();
    this.navCtrl.navigateBack('home')
	}

	showSpinner() {
		this.spinner = this.loadingCtrl.create();

		this.spinner.present();
	}

	hideSpinner() {
		this.spinner.dismiss();
	}

async	presentToast(msg) {

		console.log(msg)

		let toast =await this.toastCtrl.create({
			message: msg,
			duration: 5000,
			position: 'bottom'
		});

		toast.present();

	}

  

}
