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
  templateUrl: 'aula1-n6.html',
})
export class Nivel6_aula1Page {

  checado: string;

  treinosList: any[] = [
    {id: 347, treino: "Ponto Huen Mah com Biu Sao - 4x10", class: localStorage.getItem("347")},
    {id: 348, treino: "Treino Huen Mah com Biu Sao + Flência - 4x10", class: localStorage.getItem("348")},
    {id: 349, treino: "Treino Ciclo Kwai Jang - 4x10", class: localStorage.getItem("349")},
    {id: 350, treino: "Treino Kwai Jang Defensivo - 4x10", class: localStorage.getItem("350")},
    {id: 351, treino: "Treino Transforma ataque em Kwai Jang - 4x10", class: localStorage.getItem("351")},
  ]; 

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private toast: ToastController
  ) {}

  ionViewDidLoad() {
  }

  salvar(id){
    if(this.treinosList[id -347].class !== "checkmark"){
      this.treinosList[id -347].class = "checkmark";

      this.checado = this.treinosList[id-347].class;

      localStorage.setItem(this.treinosList[id-347].id, this.treinosList[id-347].class);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }else{
      this.treinosList[id -347].class = "";
      localStorage.setItem(this.treinosList[id-347].id, this.treinosList[id-347].class);

      this.checado = localStorage.getItem(id);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }

    return this.treinosList; 
  }

}