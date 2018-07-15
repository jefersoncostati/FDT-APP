import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsN_9Page } from './tabs/tabls';

/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nivel-9',
  templateUrl: 'nivel-9.html',
})
export class Nivel_9Page {

  rootPage:any = TabsN_9Page;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Nivel_1Page');
  }
}
