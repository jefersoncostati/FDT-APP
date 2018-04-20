import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Nivel_1Page } from '../nivel-1/nivel-1';
import { Nivel_2Page } from '../nivel-2/nivel-2';
import { Nivel_3Page } from '../nivel-3/nivel-3';
import { Nivel_4Page } from '../nivel-4/nivel-4';
import { Nivel_5Page } from '../nivel-5/nivel-5';
import { Nivel_6Page } from '../nivel-6/nivel-6';
import { Nivel_7Page } from '../nivel-7/nivel-7';
import { Nivel_8Page } from '../nivel-8/nivel-8';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  niveis: any[] = [
    {nivel: "Nível 1"},
    {nivel: "Nível 2"},
    {nivel: "Nível 3"},
    {nivel: "Nível 4"},
    {nivel: "Nível 5"},
    {nivel: "Nível 6"},
    {nivel: "Nível 7"},
    {nivel: "Nível 8"}
  ];

  constructor(public navCtrl: NavController) {

  }

  itemSelected(nivel){
    switch(nivel.nivel){
      case "Nível 1":
      this.navCtrl.push(Nivel_1Page);
      break;
      case "Nível 2":
      this.navCtrl.push(Nivel_2Page);
      break;
      case "Nível 3":
      this.navCtrl.push(Nivel_3Page);
      break;
      case "Nível 4":
      this.navCtrl.push(Nivel_4Page);
      break;
      case "Nível 5":
      this.navCtrl.push(Nivel_5Page);
      break;
      case "Nível 6":
      this.navCtrl.push(Nivel_6Page);
      break;
      case "Nível 7":
      this.navCtrl.push(Nivel_7Page);
      break;
      case "Nível 8":
      this.navCtrl.push(Nivel_8Page);
      break;
    }
  }

}
