import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { CartPage } from '../cart/cart';
import { BrowserTransferStateModule } from '@angular/platform-browser/src/browser/transfer_state';

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  homeParam:any
  product:any
  public cart : any = [];
  cartData:any;
  dataCart:any
  orderParam:any

  constructor(public navCtrl: NavController, public navParams: NavParams){
  this.homeParam = this.navParams.get('productData');
  console.log(this.homeParam);
  this.orderParam = this.navParams.get('orderData');
  console.log(this.navParams.get('orderData'));
  }
  ionViewDidLoad(){
  console.log('ionViewDidLoad DetailsPage'); 
  }
  clickAddToCart(){
    let personRef=firebase.database().ref('carts/');
    personRef.once('value',cartSnapshot =>{
     if(cartSnapshot.val()){
      this.dataCart=cartSnapshot.val()
      var found:boolean = false;
      for(let key in this.dataCart){
     if(this.dataCart[key].productId == this.homeParam.productId){
      found = true;
      console.log(this.dataCart[key].productId + " and " + this.homeParam.productId);
     }
    }
      if(!found){
        console.log("not matching")
        firebase.database().ref('/carts/').push(this.homeParam);
        this.navCtrl.push(CartPage);
      }else{
        alert("already Exixt")
      }
    }else{
      firebase.database().ref('/carts/').push(this.homeParam);
    }
    })
  }
  }