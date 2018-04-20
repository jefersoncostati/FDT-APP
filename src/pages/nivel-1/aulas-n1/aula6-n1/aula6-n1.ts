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
  templateUrl: 'aula6-n1.html',
})
export class Nivel1_aula6Page {

  checado: string;

  treinosList: any[] = [
    {id: 42, treino: "Forma Siu Lim Tao", class: localStorage.getItem("42")},
    {id: 43, treino: "Ponto Passo, dois socos - 4x10", class: localStorage.getItem("43")},
    {id: 44, treino: "Pak Longo avançando, Tan Da triangulando - 4x10", class: localStorage.getItem("44")},
    {id: 45, treino: "Revisão N1 A5 - 1x10", class: localStorage.getItem("45")},
    {id: 46, treino: "Luta", class: localStorage.getItem("46")},
  ];  

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private toast: ToastController
  ) {}

  ionViewDidLoad() {
  }

  salvar(id){
    if(this.treinosList[id -42].class !== "checkmark"){
      this.treinosList[id -42].class = "checkmark";

      this.checado = this.treinosList[id-42].class;

      localStorage.setItem(this.treinosList[id-42].id, this.treinosList[id-42].class);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }else{
      this.treinosList[id -42].class = "";
      localStorage.setItem(this.treinosList[id-42].id, this.treinosList[id-42].class);

      this.checado = localStorage.getItem(id);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }

    return this.treinosList; 
  }

}