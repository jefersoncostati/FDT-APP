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
  templateUrl: 'aula2-n9.html',
})
export class Nivel9_aula2Page {

  checado: string;

  treinosList: any[] = [
    {id: 678, treino: "Todas as Formas", class: localStorage.getItem("678")},
    {id: 679, treino: "Ponto Liem Jam Dao (Corte corrente) - 4x10", class: localStorage.getItem("679")},
    {id: 680, treino: "Ponto Jam Dao (Bloqueio Duplo) - 4x10", class: localStorage.getItem("680")},
    {id: 681, treino: "Ponto Bloqueio Duplo, Guan Dao, Jam Da - 4x10", class: localStorage.getItem("681")},
    {id: 682, treino: 'Treino "Guarda" Huem contra estocada - 4x10', class: localStorage.getItem("682")},
    {id: 683, treino: "Revisão A1 - 3x10", class: localStorage.getItem("683")}
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
    if(this.treinosList[id -678].class !== "checkmark"){
      this.treinosList[id -678].class = "checkmark";

      this.checado = this.treinosList[id-678].class;

      localStorage.setItem(this.treinosList[id-678].id, this.treinosList[id-678].class);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }else{
      this.treinosList[id -678].class = "";
      localStorage.setItem(this.treinosList[id-678].id, this.treinosList[id-678].class);

      this.checado = localStorage.getItem(id);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }

    return this.treinosList; 
  }

}