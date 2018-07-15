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
  templateUrl: 'aula4-n9.html',
})
export class Nivel9_aula4Page {

  checado: string;

  treinosList: any[] = [
    {id: 689, treino: "Todas as Formas", class: localStorage.getItem("689")},
    {id: 690, treino: "Ponto Qi Dao / Lap Dao - 4x10", class: localStorage.getItem("690")},
    {id: 691, treino: "Treino Aparar e Estocar (circulando) - 4x10", class: localStorage.getItem("691")},
    {id: 692, treino: "Ponto Qi Dao Torcendo - 4x10", class: localStorage.getItem("692")},
    {id: 693, treino: "Revisão aula 1 - 1x10", class: localStorage.getItem("693")},
    {id: 694, treino: "Revisão aula 2 - 2x10", class: localStorage.getItem("694")},
    {id: 695, treino: "Revisao aula 3 - 3x10", class: localStorage.getItem("695")},
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
    if(this.treinosList[id -689].class !== "checkmark"){
      this.treinosList[id -689].class = "checkmark";

      this.checado = this.treinosList[id-689].class;

      localStorage.setItem(this.treinosList[id-689].id, this.treinosList[id-689].class);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }else{
      this.treinosList[id -689].class = "";
      localStorage.setItem(this.treinosList[id-689].id, this.treinosList[id-689].class);

      this.checado = localStorage.getItem(id);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }

    return this.treinosList; 
  }
}