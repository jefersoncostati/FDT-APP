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
  templateUrl: 'aula5-n9.html',
})
export class Nivel9_aula5Page {

  checado: string;

  treinosList: any[] = [
    {id: 696, treino: "Todas as Formas", class: localStorage.getItem("696")},
    {id: 697, treino: "Ponto Kan Dao - 4x10", class: localStorage.getItem("697")},
    {id: 698, treino: "Treino Kan Aparar e Cortar - 4x10", class: localStorage.getItem("698")},
    {id: 699, treino: "Ponto Kan Dao, Tan / Jam Da - 4x10", class: localStorage.getItem("699")},
    {id: 700, treino: "Treino Tan Dao - 4x10", class: localStorage.getItem("700")},
    {id: 701, treino: "A1 - 1x5", class: localStorage.getItem("701")},
    {id: 702, treino: "A2 - 1x5", class: localStorage.getItem("702")},
    {id: 703, treino: "A3 - 2x10", class: localStorage.getItem("703")},
    {id: 704, treino: "A4 - 3x10", class: localStorage.getItem("704")}
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
    if(this.treinosList[id -696].class !== "checkmark"){
      this.treinosList[id -696].class = "checkmark";

      this.checado = this.treinosList[id-696].class;

      localStorage.setItem(this.treinosList[id-696].id, this.treinosList[id-696].class);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }else{
      this.treinosList[id -696].class = "";
      localStorage.setItem(this.treinosList[id-696].id, this.treinosList[id-696].class);

      this.checado = localStorage.getItem(id);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }

    return this.treinosList; 
  }
}