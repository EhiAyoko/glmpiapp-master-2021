import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigureService {

	// replace with your WordPress site URL. Must be HTTPS for production.
	url: string = 'https://glmpiapp.com/'
	isLogin = false
	constructor(public http: HttpClient) {
	}

	getUrl() {
		return this.url;
	}

	/*
	 * The WooCommerce REST API requires authorization. Basic auth requires a base64 encoded string of 'Basic ' + btoa('key:secret') 
	 * Replace the Authorization header below with your own by base64 encoding your consumer key and secret key which you can get in the WooCommerce settings: http://woocommerce.github.io/woocommerce-rest-api-docs/#rest-api-keys
	 * Must use HTTPS for basic auth.
	 */
	getAuth() {
		return 'Basic Y2tfZWUwMTBhOWQyOWYxN2Y5NjM4ZDViYjJhZWFhNDMyYzM4N2FmNTJiZTpjc18xMjM5MmYyYmVhMzlhYjZlYTM4NWExYWVmZWFjYzIyNDdkMTcxNjdm';
	}
}
