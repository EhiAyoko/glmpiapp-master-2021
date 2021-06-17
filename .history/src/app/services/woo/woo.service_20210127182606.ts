import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { ConfigureService } from 'src/app/services/configure/configure.service';

@Injectable({
  providedIn: 'root'
})
export class WooService {

  data: any = null;
  url: string;
  authString: string;

  constructor(
    public http: HttpClient,
    public storage: Storage,
    public configure: ConfigureService ) {

    this.url = configure.getUrl()
    // add your auth keys in providers/configure
    this.authString = this.configure.getAuth()

  }

  /* Returns promise.
   * Usage: 
   */
  get( route, page ) {

    return new Promise( (resolve, reject) => {

      if( !route )
        reject({ data: { message: "No URL set. " } })

      var concat;

      // check if url already has a query param
      if( route.indexOf('?') > 0 ) {
        concat = '&';
      } else {
        concat = '?';
      }

      let url = this.url + route;

      // set pagination
      if( page === 'nopaging' ) {
        // get all results with no paging
        url = url + concat + 'per_page=50'
      } else if( page ) {
        url = url + concat + 'page=' + page
      } else {
        url = url + concat + 'page=1'
      }

      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': this.authString
        })
      };

      this.http.get( url, httpOptions )
        .subscribe(data => {

          this.data = data;

          resolve(this.data);
        },
        error => {
          // probably a bad url or 404
          reject(error);
          this.handleError(error)
        })

    }); // end Promise
    
  }

  send( data, route ) {

    return new Promise( (resolve, reject) => {

      if( !data )
        reject({ data: { message: "No data." } })

      let url = this.url + route

      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': this.authString
        })
      };

      this.http.post( url, data, httpOptions )
        .subscribe(data => {

          this.data = data;

          resolve(this.data);
        },
        error => {
          // probably a bad url or 404
          reject(error);
          this.handleError(error)
        })

    }); // end Promise

  }

  getCartContents() {

    return new Promise( (resolve, reject) => {

      this.storage.get( 'cart' ).then( data => {
        resolve( data )
      })

    })

  }

  handleError(err) {
    console.warn(err);
  }
}
