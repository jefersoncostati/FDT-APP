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
  selector: 'page-nivel-1',
  templateUrl: 'aula10-n1.html',
})
export class Nivel1_aula10Page {

  checado: string;

  treinosList: any[] = [
    {id: 56, treino: "Revisão de todos os Pontos e Treinos - 1x10", class: localStorage.getItem("56")},
    {id: 57, treino: "Luta de um toque até o final da aula", class: localStorage.getItem("57")},
    {id: 58, treino: "Luta", class: localStorage.getItem("58")},
  ]; 

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private toast: ToastController
  ) {}

  ionViewDidLoad() {
  }

  salvar(id){
    if(this.treinosList[id -56].class !== "checkmark"){
      this.treinosList[id -56].class = "checkmark";

      this.checado = this.treinosList[id-56].class;

      localStorage.setItem(this.treinosList[id-56].id, this.treinosList[id-56].class);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }else{
      this.treinosList[id -56].class = "";
      localStorage.setItem(this.treinosList[id-56].id, this.treinosList[id-56].class);

      this.checado = localStorage.getItem(id);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }

    return this.treinosList; 
  }

}