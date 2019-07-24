import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GetstartedPage } from '../getstarted/getstarted';
import { ShopPage } from '../shop/shop';

@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  getStarted(){
    this.navCtrl.push(GetstartedPage);
  }
  
  shop(){
    this.navCtrl.push(ShopPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndexPage');
  }

}
