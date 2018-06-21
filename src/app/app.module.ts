import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import * as firebase from 'firebase';
import { DetailsPageModule } from '../pages/details/details.module';
import { CartPageModule } from '../pages/cart/cart.module';
import { BuyPageModule } from '../pages/buy/buy.module';
import { MyorderPageModule } from '../pages/myorder/myorder.module';



var config = {
  apiKey: "AIzaSyAVSpnzwLeZg9TUr9VOF3xVv0b4JW6_m-k",
  authDomain: "productapp-a0336.firebaseapp.com",
  databaseURL: "https://productapp-a0336.firebaseio.com",
  projectId: "productapp-a0336",
  storageBucket: "",
  messagingSenderId: "355435035410"
};
firebase.initializeApp(config);
@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    DetailsPageModule,
    CartPageModule,
    BuyPageModule,
    MyorderPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
