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
  productId:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    const personRef=firebase.database().ref('/carts/');
    personRef.on('value', personSnapshot =>{
      console.log(personSnapshot.val());
      let cartData=personSnapshot.val();
      console.log(cartData);
      this.dataCart=[];
      for(let key in cartData){
        cartData[key].itemKey=key
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
  cardClick(i){
    console.log(i);
    console.log(this.dataCart[i]);
//    var d = new Date();
//    this.productId=Math.random().toString().substr(2,4)+(this.dataCart[i].name)+"_"+(d.getMonth())+"/"+(d.getFullYear());
//    console.log(this.productId);
//    firebase.database().ref('/carts/' +this.dataCart[i].itemKey).set({
//    id:this.productId
// })
    this.navCtrl.push(BuyPage,{mycartData:this.dataCart[i]}); 
  }
  itemDelete(i){
    console.log(this.dataCart[i]);
    firebase.database().ref('/carts/' + this.dataCart[i].itemKey).remove();
    // firebase.database().ref()
    alert("item successfully deleted");
  }
}
