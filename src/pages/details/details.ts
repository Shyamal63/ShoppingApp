import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import { CartPage } from '../cart/cart';

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
  found:any
  constructor(public navCtrl: NavController, public navParams: NavParams){
  this.homeParam = this.navParams.get('productData');
  console.log(this.homeParam);

  // const personRef=firebase.database().ref('/products/' + this.homeParam);
  // personRef.on('value', personSnapshot =>{
  //   console.log(personSnapshot.val());
  //   var productData=personSnapshot.val();
  //   this.product=[]
  //   for(let key of productData){
  //   }
  // })
  }
  ionViewDidLoad(){
  console.log('ionViewDidLoad DetailsPage');
    let personRef=firebase.database().ref('/carts/');
    personRef.once('value',cartSnapshot =>{
      console.log(cartSnapshot.val());
      this.cartData=[]
      this.dataCart=cartSnapshot.val()
      for(let key in this.dataCart){
        // dataCart[key].newId=key;
        this.cartData.push(this.dataCart[key])
      }
      console.log(this.cartData ) 
      
    })
  }
  clickAddToCart(){
    console.log(this.homeParam);
   
    
    if(this.cartData != ''){
      console.log("i am if")
      this.found=false;
      for(var i = 0; i<this.cartData.length;i++){
        if(this.cartData[i].productId != this.homeParam.productId){
          console.log("i am  if if")
         this.found=true;
         break;
        }
      }
    }else{
      console.log("i am else");
      console.log(this.dataCart )
      firebase.database().ref('/carts/').push(this.homeParam);
     // this.navCtrl.push(CartPage); 
      alert("product is  in cart");
    }
    // localStorage.setItem("items",this.homeParam);

    if(this.found==true){
      firebase.database().ref('/carts/').push(this.homeParam);
      alert("product is  in cart");
    }
  }
}
// firebase.database().ref('/carts/').push(this.homeParam);
// alert("product is  in cart");