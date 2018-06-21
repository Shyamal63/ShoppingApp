import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as firebase from 'firebase';
import { DetailsPage } from '../details/details';
import { CartPage } from '../cart/cart';
import { MyorderPage } from '../myorder/myorder';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  newData:any
  ProductDetails:any
  constructor(public navCtrl: NavController){




  
    this.ProductDetails=[
      {"name":"Redmi Note5","price":10000,"ram":"3gb","image":"../../assets/imgs/mobile.jpg","productId":"12321"},
      {"name":"Samsung Note5","price":20000,"ram":"4gb","image":"../../assets/imgs/mobile.jpg","productId":"22332"},
      {"name":"Nokia n8","price":50000,"ram":"2gb","image":"../../assets/imgs/mobile.jpg","productId":"22332"},
      {"name":"Sony Experia z3","price":80000,"ram":"6gb","image":"../../assets/imgs/mobile.jpg","productId":"22332"},
    ]
    const personRef=firebase.database().ref('/products/');
       personRef.once('value', personSnapshot =>{
         console.log(personSnapshot.val());
         this.newData=personSnapshot.val();  
        console.log(this.newData);
       })




       
      }
  // }
  // clickSubmit(){
  //   alert("hello");
  //   firebase.database().ref('/products/').set(this.ProductDetails);
  // }
  clickItem(i){
    // console.log(this.products[i])
    console.log(this.newData[i]);
    this.navCtrl.push(DetailsPage,{productData:this.newData[i]});
}
clickCart(){
  // alert("cart clicked");
  this.navCtrl.push(CartPage);
}
placedOrder(){
  this.navCtrl.push(MyorderPage);
}
}

