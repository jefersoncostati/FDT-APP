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
  templateUrl: 'aula10-n6.html',
})
export class Nivel6_aula10Page {

  checado: string;

  treinosList: any[] = [
    {id: 384, treino: "Revisão dos Níveis 1, 2, 3, 4 - 1x5 cada Ponto e Treino", class: localStorage.getItem("384")},
    {id: 385, treino: "Revisão N6 - 1x10 cada ponto e treino", class: localStorage.getItem("385")},
  ]; 

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private toast: ToastController
  ) {}

  ionViewDidLoad() {
  }

  salvar(id){
    if(this.treinosList[id -384].class !== "checkmark"){
      this.treinosList[id -384].class = "checkmark";

      this.checado = this.treinosList[id-384].class;

      localStorage.setItem(this.treinosList[id-384].id, this.treinosList[id-384].class);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }else{
      this.treinosList[id -384].class = "";
      localStorage.setItem(this.treinosList[id-384].id, this.treinosList[id-384].class);

      this.checado = localStorage.getItem(id);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }

    return this.treinosList; 
  }

}