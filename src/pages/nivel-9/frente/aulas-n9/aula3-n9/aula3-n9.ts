import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';

/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-frente-n9',
  templateUrl: 'aula3-n9.html',
})
export class Nivel9_aula3Page {

  checado: string;

  treinosList: any[] = [
    {id: 684, treino: "Todas as Formas", class: localStorage.getItem("684")},
    {id: 685, treino: "Ponto Liem Qi Dao - 4x10", class: localStorage.getItem("685")},
    {id: 686, treino: "Ponto Guan Dao / Jam Da em três alturas - 4x10", class: localStorage.getItem("686")},
    {id: 687, treino: "Revisão A1 - 2x10", class: localStorage.getItem("687")},
    {id: 688, treino: "Revisão A2 - 3x10", class: localStorage.getItem("688")},
  ]; 

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private toast: ToastController,
    public alertCtrl: AlertController
  ) {}

  ionViewDidLoad() {
  }

  salvar(id){
    if(this.treinosList[id -684].class !== "checkmark"){
      this.treinosList[id -684].class = "checkmark";

      this.checado = this.treinosList[id-684].class;

      localStorage.setItem(this.treinosList[id-684].id, this.treinosList[id-684].class);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }else{
      this.treinosList[id -684].class = "";
      localStorage.setItem(this.treinosList[id-684].id, this.treinosList[id-684].class);

      this.checado = localStorage.getItem(id);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }

    return this.treinosList; 
  }
}