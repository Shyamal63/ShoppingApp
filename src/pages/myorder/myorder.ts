import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import *as firebase from 'firebase';
import { DetailsPage } from '../details/details';

/**
 * Generated class for the MyorderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-myorder',
  templateUrl: 'myorder.html',
})
export class MyorderPage {
  ordersData:any;
  productId:any;
  id:any;
  productData:any

  constructor(public navCtrl: NavController, public navParams: NavParams) {
// const personRef=firebase.database().ref('/orders/');
// personRef.on('value',orderSnap =>{
//   console.log(orderSnap.val());
//   let orders=orderSnap.val();
//   console.log(orders);
//   this.ordersData=[]
//   for(let key in orders){
//     this.ordersData.push(orders[key]);
//   }
//   console.log(this.ordersData);
  
// })

this.productData=this.navParams.get('orderDtlsParam')
console.log(this.productData);


  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MyorderPage');
  }
  clickView(i){
    console.log(i);
      console.log(this.ordersData[i]);
      this.navCtrl.push(DetailsPage,{orderData:this.ordersData[i]});
  }
}

