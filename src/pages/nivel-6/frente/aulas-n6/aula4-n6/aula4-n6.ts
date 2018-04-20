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
  templateUrl: 'aula4-n6.html',
})
export class Nivel6_aula4Page {

  checado: string;

  treinosList: any[] = [
    {id: 364, treino: "Revisão dos Níveis 1, 2, 3, 4 - Número do nível multiplicado por 5", class: localStorage.getItem("364")},
    {id: 365, treino: "Revisão N6 - 1x20 cada ponto e treino", class: localStorage.getItem("365")},
  ]; 

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private toast: ToastController
  ) {}

  ionViewDidLoad() {
  }

  salvar(id){
    if(this.treinosList[id -364].class !== "checkmark"){
      this.treinosList[id -364].class = "checkmark";

      this.checado = this.treinosList[id-364].class;

      localStorage.setItem(this.treinosList[id-364].id, this.treinosList[id-364].class);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }else{
      this.treinosList[id -364].class = "";
      localStorage.setItem(this.treinosList[id-364].id, this.treinosList[id-364].class);

      this.checado = localStorage.getItem(id);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }

    return this.treinosList; 
  }

}