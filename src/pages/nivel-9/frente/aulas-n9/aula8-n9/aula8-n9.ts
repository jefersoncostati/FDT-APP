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
  templateUrl: 'aula8-n9.html',
})
export class Nivel9_aula8Page {

  checado: string;

  treinosList: any[] = [
    {id: 720, treino: "Todas as Formas", class: localStorage.getItem("720")},
    {id: 721, treino: "Ponto Fak Dao, Jut Dao, Biu Dao - 4x10", class: localStorage.getItem("721")},
    {id: 722, treino: "Ponto Man Dao / Tan (ataque c/ mesmo braço) - 4x10", class: localStorage.getItem("722")},
    {id: 723, treino: "Ponto Man Dao avançando - 4x10", class: localStorage.getItem("723")},
    {id: 724, treino: "Revisão até a aula atual - 1x5", class: localStorage.getItem("724")}
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
    if(this.treinosList[id -720].class !== "checkmark"){
      this.treinosList[id -720].class = "checkmark";

      this.checado = this.treinosList[id-720].class;

      localStorage.setItem(this.treinosList[id-720].id, this.treinosList[id-720].class);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }else{
      this.treinosList[id -720].class = "";
      localStorage.setItem(this.treinosList[id-720].id, this.treinosList[id-720].class);

      this.checado = localStorage.getItem(id);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }

    return this.treinosList; 
  }
}