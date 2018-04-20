import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Nivel1_aula1Page } from './aulas-n1/aula1-n1/aula1-n1';
import { Nivel1_aula2Page } from './aulas-n1/aula2-n1/aula2-n1';
import { Nivel1_aula3Page } from './aulas-n1/aula3-n1/aula3-n1';
import { Nivel1_aula4Page } from './aulas-n1/aula4-n1/aula4-n1';
import { Nivel1_aula5Page } from './aulas-n1/aula5-n1/aula5-n1';
import { Nivel1_aula6Page } from './aulas-n1/aula6-n1/aula6-n1';
import { Nivel1_aula7Page } from './aulas-n1/aula7-n1/aula7-n1';
import { Nivel1_aula8Page } from './aulas-n1/aula8-n1/aula8-n1';
import { Nivel1_aula9Page } from './aulas-n1/aula9-n1/aula9-n1';
import { Nivel1_aula10Page } from './aulas-n1/aula10-n1/aula10-n1';
import { Nivel1_aula11Page } from './aulas-n1/aula11-n1/aula11-n1';
import { Nivel1_aula12Page } from './aulas-n1/aula12-n1/aula12-n1';

/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nivel-1',
  templateUrl: 'nivel-1.html',
})
export class Nivel_1Page {

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
      this.navCtrl.push(Nivel1_aula1Page);
      break;
      case "Aula 02":
      this.navCtrl.push(Nivel1_aula2Page);
      break;
      case "Aula 03":
      this.navCtrl.push(Nivel1_aula3Page);
      break;
      case "Aula 04":
      this.navCtrl.push(Nivel1_aula4Page);
      break;
      case "Aula 05":
      this.navCtrl.push(Nivel1_aula5Page);
      break;
      case "Aula 06":
      this.navCtrl.push(Nivel1_aula6Page);
      break;
      case "Aula 07":
      this.navCtrl.push(Nivel1_aula7Page);
      break;
      case "Aula 08":
      this.navCtrl.push(Nivel1_aula8Page);
      break;
      case "Aula 09":
      this.navCtrl.push(Nivel1_aula9Page);
      break;
      case "Aula 10":
      this.navCtrl.push(Nivel1_aula10Page);
      break;
      case "Aula 11":
      this.navCtrl.push(Nivel1_aula11Page);
      break;
      case "Aula 12":
      this.navCtrl.push(Nivel1_aula12Page);
      break;
    }

  }
  
}
