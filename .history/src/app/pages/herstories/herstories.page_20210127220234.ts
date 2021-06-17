import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { PostsService } from 'src/app/services/posts/posts.service';
import { ConfigureService } from 'src/app/services/configure/configure.service';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-herstories',
  templateUrl: './herstories.page.html',
  styleUrls: ['./herstories.page.scss'],
})
export class HERstoriesPage implements OnInit {

	items: any;
	page: number = 1;
	route: string;


	constructor(
		public navCtrl: NavController, 
		public postService: PostsService,
		public loadingCtrl: LoadingController,
		public toastCtrl: ToastController,
		public configure: ConfigureService
		) {

		let url = configure.getUrl()

		// put your desired WP-API route here. URL params, CPTs, and custom routes all OK
		this.route = url + 'wp-json/wp/v2/posts'
	}
	ionViewDidLoad() {
		this.loadPosts()
	}

async	loadPosts() {

		let loading =await this.loadingCtrl.create({
		    showBackdrop: false,
		    //dismissOnPageChange: true
		});

		loading.present();

		this.page = 1;

		// any menu imported from WP has to use same component. Other pages can be added manually with different components
		this.postService.load( this.route, this.page ).then(items => {

		  // Loads posts from WordPress API
		  this.items = items;
console.log('postdata', this.items)
		  // load more right away
		  this.loadMore(null);
		  loading.dismiss();
		}).catch((err) => {

		  loading.dismiss();
		  console.error('Error getting posts', err);

		});

		// make sure spinner never gets stuck on
		setTimeout(() => {
		    loading.dismiss();
		}, 8000);

	}

	itemTapped(event, item) {
		let opt = {};
    let navigationExtras: NavigationExtras = {
      state: {
        item: item
      },
    };
    this.navCtrl.navigateForward('post-details', navigationExtras);
	}

	doRefresh(refresh) {
		this.loadPosts();
		// refresh.complete should happen when posts are loaded, not timeout
		setTimeout( ()=> refresh.complete(), 500);
	}

	loadMore(infiniteScroll) {

		this.page++;

		this.postService.load( this.route, this.page ).then(items => {
		  // Loads posts from WordPress API
		  let length = items["length"];

		  if( length === 0 ) {
		    if(infiniteScroll)
		      infiniteScroll.complete();
		    return;
		  }

		  for (var i = 0; i < length; ++i) {
		    this.items.push( items[i] );
		  }

		  if(infiniteScroll)
		    infiniteScroll.complete();

		}).catch( e => {
		  // promise was rejected, usually a 404 or error response from API
		  if(infiniteScroll)
		    infiniteScroll.complete();

		  console.warn(e)

		});

	}

async	presentToast(msg) {

		let toast =await this.toastCtrl.create({
		  message: msg,
		  duration: 3000,
		  position: 'bottom',
		  cssClass: 'normal-toast'
		});

		toast.present();

	}

  ngOnInit() {
  }

}
