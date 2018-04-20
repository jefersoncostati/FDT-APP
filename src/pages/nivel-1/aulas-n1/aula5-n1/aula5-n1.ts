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
  templateUrl: 'aula5-n1.html',
})
export class Nivel1_aula5Page {

  checado: string;

  treinosList: any[] = [
    {id: 36, treino: "Forma Siu Lim Tao", class: localStorage.getItem("36")},
    {id: 37, treino: "Revisão N1 A1 - 2x10", class: localStorage.getItem("37")},
    {id: 38, treino: "Revisão N1 A2 - 2x10", class: localStorage.getItem("38")},
    {id: 39, treino: "Revisão N1 A3 - 2x10", class: localStorage.getItem("39")},
    {id: 40, treino: "Revisão N1 A4 - 2x10", class: localStorage.getItem("40")},
    {id: 41, treino: "Luta", class: localStorage.getItem("41")},
  ]; 

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private toast: ToastController
  ) {}

  ionViewDidLoad() {
  }

  salvar(id){
    if(this.treinosList[id -36].class !== "checkmark"){
      this.treinosList[id -36].class = "checkmark";

      this.checado = this.treinosList[id-36].class;

      localStorage.setItem(this.treinosList[id-36].id, this.treinosList[id-36].class);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }else{
      this.treinosList[id -36].class = "";
      localStorage.setItem(this.treinosList[id-36].id, this.treinosList[id-36].class);

      this.checado = localStorage.getItem(id);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }

    return this.treinosList; 
  }

}