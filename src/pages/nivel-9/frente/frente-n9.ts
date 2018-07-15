import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Nivel9_aula1Page } from './aulas-n9/aula1-n9/aula1-n9';
import { Nivel9_aula2Page } from './aulas-n9/aula2-n9/aula2-n9';
import { Nivel9_aula3Page } from './aulas-n9/aula3-n9/aula3-n9';
import { Nivel9_aula4Page } from './aulas-n9/aula4-n9/aula4-n9';
import { Nivel9_aula5Page } from './aulas-n9/aula5-n9/aula5-n9';
import { Nivel9_aula6Page } from './aulas-n9/aula6-n9/aula6-n9';
import { Nivel9_aula7Page } from './aulas-n9/aula7-n9/aula7-n9';
import { Nivel9_aula8Page } from './aulas-n9/aula8-n9/aula8-n9';
import { Nivel9_aula9Page } from './aulas-n9/aula9-n9/aula9-n9';
import { Nivel9_aula10Page } from './aulas-n9/aula10-n9/aula10-n9';
import { Nivel9_aula11Page } from './aulas-n9/aula11-n9/aula11-n9';
import { Nivel9_aula12Page } from './aulas-n9/aula12-n9/aula12-n9';

/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-frente-n9',
  templateUrl: 'frente-n9.html',
})
export class FrenteN_9Page {

  aulas: any[] = [
    {aula: "Aula 01"},
    {aula: "Aula 02"},
    {aula: "Aula 03"},
    {aula: "Aula 04"},
    {aula: "Aula 05"},
    {aula: "Aula 06"},
    {aula: "Aula 07"},
    {aula: "Aula 08"},
    {aula: "Aula 09"},
    {aula: "Aula 10"},
    {aula: "Aula 11"},
    {aula: "Aula 12"},
  ];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Nivel_1Page');
  }

  itemSelected(aula){
    console.log(aula.aula);
    
    switch(aula.aula){
      case "Aula 01":
      this.navCtrl.push(Nivel9_aula1Page);
      break;
      case "Aula 02":
      this.navCtrl.push(Nivel9_aula2Page);
      break;
      case "Aula 03":
      this.navCtrl.push(Nivel9_aula3Page);
      break;
      case "Aula 04":
      this.navCtrl.push(Nivel9_aula4Page);
      break;
      case "Aula 05":
      this.navCtrl.push(Nivel9_aula5Page);
      break;
      case "Aula 06":
      this.navCtrl.push(Nivel9_aula6Page);
      break;
      case "Aula 07":
      this.navCtrl.push(Nivel9_aula7Page);
      break;
      case "Aula 08":
      this.navCtrl.push(Nivel9_aula8Page);
      break;
      case "Aula 09":
      this.navCtrl.push(Nivel9_aula9Page);
      break;
      case "Aula 10":
      this.navCtrl.push(Nivel9_aula10Page);
      break;
      case "Aula 11":
      this.navCtrl.push(Nivel9_aula11Page);
      break;
      case "Aula 12":
      this.navCtrl.push(Nivel9_aula12Page);
      break;
    }

  }
  
}
