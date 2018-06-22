import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MakepaymentPage } from '../makepayment/makepayment';

/**
 * Generated class for the AddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-address',
  templateUrl: 'address.html',
})
export class AddressPage {
  buyDetailsParam:any
  yourName:any
  pnumber:any
  email:any
  address:any
  addressData:any
  parameterData:any
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.buyDetailsParam=this.navParams.get('details');
    console.log(this.buyDetailsParam);
    console.log(this.buyDetailsParam.itemKey);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddressPage');
  }


  isvalidEmailFormat(email){ 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }


  nextButtonClick(){

if(this.yourName == undefined || this.yourName == null || this.yourName == ''){
  alert("please provide a valid name");
}else if(this.pnumber == undefined || this.pnumber == null || this.yourName == ''){
  alert("please provide a valid phone number"); 
}else if(this.email == undefined || this.email == '' || this.email == null){
  alert("this field can not be blank");
} else if(!this.isvalidEmailFormat(this.email)){
  alert("wrong email");
}else if(this.address == undefined || this.address == '' || this.address == null){
  alert("this field can not be blank");
}
else{
  this.buyDetailsParam.personname=this.yourName,
      this.buyDetailsParam.pnumber=this.pnumber,
      this.buyDetailsParam.email=this.email,
      this.buyDetailsParam.address=this.address,
  console.log(this.buyDetailsParam);
  this.navCtrl.push(MakepaymentPage,{'buyparam':this.buyDetailsParam})

}
      
  }
}
