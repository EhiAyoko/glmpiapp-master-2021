import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {DomSanitizer} from '@angular/platform-browser';
import { Router } from '@angular/router'

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.page.html',
  styleUrls: ['./post-details.page.scss'],
})
export class PostDetailsPage implements OnInit {

  selectedItem: any;
  content: any;
  constructor(
  	public navCtrl: NavController, 
    public sanitizer: DomSanitizer,
    public router: Router
  	) {
      const navigation = this.router.getCurrentNavigation();
      const state = navigation.extras.state as {
        item
      };
      if(state!=undefined){
        this.selectedItem = state.item;
        console.log(this.selectedItem)
      }
     
  
    if( this.selectedItem.content.rendered ) {
      this.content = this.sanitizer.bypassSecurityTrustHtml( this.selectedItem.content.rendered );
    }

  }
  ngOnInit() {
  }

}
