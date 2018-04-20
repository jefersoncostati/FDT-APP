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
  selector: 'page-nivel-6',
  templateUrl: 'aula7-n6.html',
})
export class Nivel6_aula7Page {

  checado: string;

  treinosList: any[] = [
    {id: 373, treino: "Ponto Biu Jee - 4x10", class: localStorage.getItem("373")},
    {id: 374, treino: "Treino Biu Jee barreira por dentro e por fora - 4x10", class: localStorage.getItem("374")},
    {id: 375, treino: "Treino Biu Da - 4x10", class: localStorage.getItem("375")},
    {id: 376, treino: "Treino Bai Jee Da - 4x10", class: localStorage.getItem("376")},
    {id: 377, treino: "Treino Bai Jee + Fluência - 4x10", class: localStorage.getItem("377")},
  ]; 

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private toast: ToastController
  ) {}

  ionViewDidLoad() {
  }

  salvar(id){
    if(this.treinosList[id -373].class !== "checkmark"){
      this.treinosList[id -373].class = "checkmark";

      this.checado = this.treinosList[id-373].class;

      localStorage.setItem(this.treinosList[id-373].id, this.treinosList[id-373].class);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }else{
      this.treinosList[id -373].class = "";
      localStorage.setItem(this.treinosList[id-373].id, this.treinosList[id-373].class);

      this.checado = localStorage.getItem(id);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }

    return this.treinosList; 
  }

}