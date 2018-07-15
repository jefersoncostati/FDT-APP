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
  templateUrl: 'aula11-n9.html',
})
export class Nivel9_aula11Page {

  checado: string;

  treinosList: any[] = [
    {id: 739, treino: "Todas as Formas", class: localStorage.getItem("739")},
    {id: 740, treino: "Fluência Indefinida contra Baat Jaam Dao", class: localStorage.getItem("740")},
    {id: 741, treino: "Fluência Indefinida contra Bastão", class: localStorage.getItem("741")},
    {id: 742, treino: "Fluência Indefinida contra Espada Longa", class: localStorage.getItem("742")}
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
    if(this.treinosList[id -739].class !== "checkmark"){
      this.treinosList[id -739].class = "checkmark";

      this.checado = this.treinosList[id-739].class;

      localStorage.setItem(this.treinosList[id-739].id, this.treinosList[id-739].class);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }else{
      this.treinosList[id -739].class = "";
      localStorage.setItem(this.treinosList[id-739].id, this.treinosList[id-739].class);

      this.checado = localStorage.getItem(id);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }

    return this.treinosList; 
  }

}