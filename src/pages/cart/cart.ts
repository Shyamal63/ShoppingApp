import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import *as firebase from 'firebase'
import { BuyPage } from '../buy/buy';

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  dataCart:any = []
  public detailsParam:any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    const personRef=firebase.database().ref('/carts/');
    personRef.once('value', personSnapshot =>{
      console.log(personSnapshot.val());
      let cartData=personSnapshot.val();
      console.log(cartData);
     
      for(let key in cartData){
        cartData[key].item=key
        this.dataCart.push(cartData[key]);
       console.log(key);
      }
      console.log(this.dataCart)
    })
    // this.detailsParam = this.navParams.get('addCart');
    // console.log(this.detailsParam);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }
  cardClick(){
    // alert("hello");
    this.navCtrl.push(BuyPage,{});
  
  }
}
