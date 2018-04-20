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
  templateUrl: 'aula11-n6.html',
})
export class Nivel6_aula11Page {

  checado: string;

  treinosList: any[] = [
    {id: 386, treino: "Ponto Tai Jang Atacando - 4x10", class: localStorage.getItem("386")},
    {id: 387, treino: "Treino Fluência finalizando com Tai Jang - 4x10", class: localStorage.getItem("387")},
    {id: 388, treino: "Ponto Tai Jang Defendendo - 4x10", class: localStorage.getItem("388")},
    {id: 389, treino: "Treino Tai Jang Defendendo + Fluência - 4x10", class: localStorage.getItem("389")},
    {id: 390, treino: "Treino Fluência finalizando com a cabeça - 4x10", class: localStorage.getItem("390")},
    {id: 391, treino: "Treino Intensivo Sam Bai Fa contra joelhadas - 4x10", class: localStorage.getItem("391")},
    {id: 392, treino: "Treino Reerguer o corpo - 4x10", class: localStorage.getItem("392")},
  ]; 

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private toast: ToastController
  ) {}

  ionViewDidLoad() {
  }

  salvar(id){
    if(this.treinosList[id -386].class !== "checkmark"){
      this.treinosList[id -386].class = "checkmark";

      this.checado = this.treinosList[id-386].class;

      localStorage.setItem(this.treinosList[id-386].id, this.treinosList[id-386].class);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }else{
      this.treinosList[id -386].class = "";
      localStorage.setItem(this.treinosList[id-386].id, this.treinosList[id-386].class);

      this.checado = localStorage.getItem(id);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }

    return this.treinosList; 
  }

}