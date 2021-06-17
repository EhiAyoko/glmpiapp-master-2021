import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ConfigureService } from 'src/app/services/configure/configure.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  data: any = null;
  url: string;

  constructor(
    public http: HttpClient,
    public configure: ConfigureService ) {

    this.url = configure.getUrl()

  }

  /* Returns promise.
   * Usage: 
   */
  login( form: any, logout = null ) {

    return new Promise( (resolve, reject) => {

      if( !this.url )
        reject({ data: { message: "No URL set. " } })

      let url = this.url + 'wp-json/app/v1/login';

      var formData = new FormData();

      formData.append("username", form.user);
      formData.append("password", form.pass);
      formData.append("security", '3ll@neA1miuwu');

      if( logout ) {
        formData.append("logout", "true" );
      }

      var request = new XMLHttpRequest();
      request.open("POST", url);
      request.send(formData);
      request.onload = (e) => {
        if (request.readyState === 4) {
          if (request.status === 200) {
            resolve(JSON.parse(request.responseText));
          } else {
            reject(JSON.parse(request.statusText));
          }
        }
      };

    });
    
  }

  handleError(err) {
    console.warn(err);
  }

}
