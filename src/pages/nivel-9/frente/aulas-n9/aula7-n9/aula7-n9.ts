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
  templateUrl: 'aula7-n9.html',
})
export class Nivel9_aula7Page {

  checado: string;

  treinosList: any[] = [
    {id: 714, treino: "Todas as Formas", class: localStorage.getItem("714")},
    {id: 715, treino: "Ponto Guan Dao Duplo - 4x10", class: localStorage.getItem("715")},
    {id: 716, treino: "Ponto Man Dao - 4x10", class: localStorage.getItem("716")},
    {id: 717, treino: "Ponto Man Dao / Tan Da / Ataque - 4x10", class: localStorage.getItem("717")},
    {id: 718, treino: "Ponto Defesa e Ataque com o mesmo facão- 4x10", class: localStorage.getItem("718")},
    {id: 719, treino: "Revisão até a Aula Atual - 1x5", class: localStorage.getItem("719")}
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
    if(this.treinosList[id -714].class !== "checkmark"){
      this.treinosList[id -714].class = "checkmark";

      this.checado = this.treinosList[id-714].class;

      localStorage.setItem(this.treinosList[id-714].id, this.treinosList[id-714].class);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }else{
      this.treinosList[id -714].class = "";
      localStorage.setItem(this.treinosList[id-714].id, this.treinosList[id-714].class);

      this.checado = localStorage.getItem(id);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }

    return this.treinosList; 
  }
}