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
  templateUrl: 'aula7-n1.html',
})
export class Nivel1_aula7Page {

  checado: string;

  treinosList: any[] = [
    {id: 47, treino: "Forma Siu Lim Tao", class: localStorage.getItem("47")},
    {id: 48, treino: "Revisão de todos os Pontos - 2x20", class: localStorage.getItem("48")},
    {id: 49, treino: "Revisão de todos os Treinos - 2x20", class: localStorage.getItem("49")},
    {id: 50, treino: "Luta", class: localStorage.getItem("50")},
  ]; 

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private toast: ToastController
  ) {}

  ionViewDidLoad() {
  }

  salvar(id){
    if(this.treinosList[id -47].class !== "checkmark"){
      this.treinosList[id -47].class = "checkmark";

      this.checado = this.treinosList[id-47].class;

      localStorage.setItem(this.treinosList[id-47].id, this.treinosList[id-47].class);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }else{
      this.treinosList[id -47].class = "";
      localStorage.setItem(this.treinosList[id-47].id, this.treinosList[id-47].class);

      this.checado = localStorage.getItem(id);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }

    return this.treinosList; 
  }

}