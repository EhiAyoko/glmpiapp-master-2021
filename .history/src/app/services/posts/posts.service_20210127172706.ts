import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  data: any = null;

  constructor(
    public http: HttpClient
    ) {}

  load(url:string, page) {

    // set pagination
    if( !page ) {
      page = '1';
    }

    return new Promise( (resolve, reject) => {

		var concat;

		// check if url already has a query param
		if( url.indexOf('?') > 0 ) {
			concat = '&';
		} else {
			concat = '?';
		}

		this.http.get( url + concat + 'page=' + page )
		    .subscribe(data => {

		      this.data = data;

		      resolve(this.data);
		    },
		    error => {
		      // probably a bad url or 404
		      reject(error);
		    })
	});

  }
}
