import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import *as firebase from 'firebase';
import { MyorderPage } from '../myorder/myorder';
import { AddressPage } from '../address/address';

/**
 * Generated class for the BuyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buy',
  templateUrl: 'buy.html',
})
export class BuyPage {
  quantity:number
  dataParam:any
 finalPrice:any;
 dataCart:any = [];
 productId:any;
 dataOrder:any=[];
 id:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    const personRef=firebase.database().ref('/carts/');
    personRef.once('value', personSnapshot =>{
      console.log(personSnapshot.val());
      let cartData=personSnapshot.val();
      console.log(cartData);
      for(let key in cartData){
        cartData[key].itemKey=key
        this.dataCart.push(cartData[key]);
       console.log(key);
      }
    })
    // const personRef1=firebase.database().ref('/orders/');
    // personRef1.once('value', personSnapshot =>{
    //   console.log(personSnapshot.val());
    //   let orderData=personSnapshot.val();
    //   console.log(orderData);
    //   for(let key in orderData){
    //     orderData[key].itemKey=key
    //     this.dataOrder.push(orderData[key]);
    //   }
    //   console.log(this.dataOrder);
    // })
this.quantity=1;
 this.dataParam=this.navParams.get('mycartData');
 console.log(this.dataParam);
 this.calculation()
  
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyPage');
  }
  add(){
    if(this.quantity<5){
      this.quantity++;
      this.calculation()
    }   
  }
  decrement(){
    if(this.quantity>1){
      this.quantity--;
      this.calculation()
    }
  }
  calculation(){
    let price=(this.dataParam.price*this.quantity);
    this.finalPrice=(price+((price*18/100)+50));
    // this.finalPrice=(this.dataParam.price+(((this.dataParam.price)*(this.quantity))*18/100)+50)
  }
  orderPlace(){ 
    console.log(this.dataParam);
    var d = new Date();
    console.log(d);
    this.id=Math.random().toString().substr(2,4)+(this.dataParam.name)+"_"+(d.getMonth())+"/"+(d.getFullYear());
    this.dataParam.tid=this.id;
    this.dataParam.finalprice=this.finalPrice;
    this.dataParam.quantity=this.quantity,
    console.log(this.dataParam.tid);
    // firebase.database().ref('/orders/' ).push({
    // id:this.id,
    // name:this.dataParam.name,
    // image:this.dataParam.image,
    // ram:this.dataParam.ram,
    // finalprice:this.finalPrice,
    // quantity:this.quantity,
    // itemKey:this.dataParam.itemKey,
    // price:this.dataParam.price,
    // date:d,
    // })
    this.navCtrl.push(AddressPage,{details:this.dataParam});
   firebase.database().ref('/carts/' +this.dataParam.item).remove();

  //  firebase.database().ref('/orders/').push(this.dataParam);
  //  console.log(this.dataParam);
  //  alert("you have successfully placed order");
  //  this.navCtrl.push(MyorderPage);
  //  firebase.database().ref('/carts/' +this.dataParam.item).remove();
  }
}
// var d = new Date();
// this.productId=Math.random().toString().substr(2,4)+(this.dataParam.name)+"_"+(d.getMonth())+"/"+(d.getFullYear());
// console.log(this.productId);
// firebase.database().ref('/orders/' +this.dataParam.itemKey).set({
// id:this.productId
// })


