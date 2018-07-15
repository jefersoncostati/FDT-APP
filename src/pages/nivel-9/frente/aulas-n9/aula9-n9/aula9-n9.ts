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
  templateUrl: 'aula9-n9.html',
})
export class Nivel9_aula9Page {

  checado: string;

  treinosList: any[] = [
    {id: 725, treino: "Todas as Formas", class: localStorage.getItem("725")},
    {id: 726, treino: 'Ponto "Guarda em Bloqueio", Girar em torno da cabeça, ataque - 4x10', class: localStorage.getItem("726")},
    {id: 727, treino: "Ponto Fak Dao, Lan Dao - 4x10", class: localStorage.getItem("727")},
    {id: 728, treino: "Ponto Fak Dao, chute, corte duplo - 4x10", class: localStorage.getItem("728")},
    {id: 729, treino: "Ponto Kwan Dao a frente - 4x10", class: localStorage.getItem("729")},
    {id: 730, treino: "Ponto Kwan Dao a frente, Jam Da - 4x10", class: localStorage.getItem("730")},
    {id: 731, treino: "Ponto Lan Dao - 4x10", class: localStorage.getItem("731")},
    {id: 732, treino: "Ponto Lan Dao, Lan Qi Dao - 4x10", class: localStorage.getItem("732")},
    {id: 733, treino: "Ponto Chum Sum Gerk, Jam Dao duplo - 4x10",class: localStorage.getItem("733")},
    {id: 734, treino: "Revisão Até a Aula Atual - 1x5", class: localStorage.getItem("734")}
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
    if(this.treinosList[id -725].class !== "checkmark"){
      this.treinosList[id -725].class = "checkmark";

      this.checado = this.treinosList[id-725].class;

      localStorage.setItem(this.treinosList[id-725].id, this.treinosList[id-725].class);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }else{
      this.treinosList[id -725].class = "";
      localStorage.setItem(this.treinosList[id-725].id, this.treinosList[id-725].class);

      this.checado = localStorage.getItem(id);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }

    return this.treinosList; 
  }
}