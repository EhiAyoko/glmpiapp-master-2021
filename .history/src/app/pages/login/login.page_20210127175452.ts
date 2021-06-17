import { Component, OnInit } from '@angular/core';

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
	
	) {
	}

  ngOnInit() {
  }

}
