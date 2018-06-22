import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Select } from 'ionic-angular/components/select/select';
import *as firebase from 'firebase'; 
import { MyorderPage } from '../myorder/myorder';

/**
 * Generated class for the MakepaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-makepayment',
  templateUrl: 'makepayment.html',
})
export class MakepaymentPage {
  allData:any
  address:any
  Select:any 
  Relationship:any
  productId:any

  PaymantOption:any
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.allData=this.navParams.get('buyparam');
    console.log(this.allData);

this.PaymantOption=[
  "Credit/Debit card",
  "Paytm/PhonePe",
  "COD"
]
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MakepaymentPage');
  }
  orderPlace(){
    var d = new Date();
    this.productId=Math.random().toString().substr(2,4)+(this.allData.name)+"_"+(d.getMonth())+"/"+(d.getFullYear());
    console.log(this.productId);
    this.allData.transactionId=this.productId;
    firebase.database().ref('/orders/').push(this.allData);
    alert("successfully order placed"  + "your transaction id is" +this.allData.transactionId);
    firebase.database().ref('/carts/' +this.allData.itemKey).remove();
    this.navCtrl.push(MyorderPage,{'orderDtlsParam':this.allData})
  }
}
