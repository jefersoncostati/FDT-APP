import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nivel-6',
  templateUrl: 'aula3-n6.html',
})
export class Nivel6_aula3Page {

  checado: string;

  treinosList: any[] = [
    {id: 358, treino: "Ponto Kan Sao - 4x10", class: localStorage.getItem("358")},
    {id: 359, treino: "Treino Tan Sao transforma em Guan Sao + Fluência - 4x10", class: localStorage.getItem("359")},
    {id: 360, treino: "Treino Kan Sao contra ataque surpresa + Fluência - 4x10", class: localStorage.getItem("360")},
    {id: 361, treino: "Treino Kan Sao contra (um, dois) + Fluência - 4x10", class: localStorage.getItem("361")},
    {id: 362, treino: "Ponto Fak Sao, Kan Sao - 4x10", class: localStorage.getItem("362")},
    {id: 363, treino: "Treino Fak Sao, Kan Sao contra (um, dois) + Fluência - 4x10", class: localStorage.getItem("363")},
  ]; 

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private toast: ToastController
  ) {}

  ionViewDidLoad() {
  }

  salvar(id){
    if(this.treinosList[id -358].class !== "checkmark"){
      this.treinosList[id -358].class = "checkmark";

      this.checado = this.treinosList[id-358].class;

      localStorage.setItem(this.treinosList[id-358].id, this.treinosList[id-358].class);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }else{
      this.treinosList[id -358].class = "";
      localStorage.setItem(this.treinosList[id-358].id, this.treinosList[id-358].class);

      this.checado = localStorage.getItem(id);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }

    return this.treinosList; 
  }

}