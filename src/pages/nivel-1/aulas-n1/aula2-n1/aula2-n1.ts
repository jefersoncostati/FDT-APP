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
  templateUrl: 'aula2-n1.html',
})
export class Nivel1_aula2Page {

  checado: string;

  treinosList: any[] = [
    {id: 6, treino: "Forma Siu Lim Tao", class: localStorage.getItem("6")},
    {id: 7, treino: "Ponto Relaxa, Ergue, Recolhe - 4x10", class: localStorage.getItem("7")},
    {id: 8, treino: "Ponto Soco, Recolhe - 4x10", class: localStorage.getItem("8")},
    {id: 9, treino: "Ponto Soca de um lado, recolhe do outro - 4x10", class: localStorage.getItem("9")},
    {id: 10, treino: "Ponto Soco, Tan, Huen, Recolhe - 4x10", class: localStorage.getItem("10")},
    {id: 11, treino: "Treino Huen Sao - 4x10", class: localStorage.getItem("11")},
    {id: 12, treino: "Revisão N1 A1 - 3x10", class: localStorage.getItem("12")},
    {id: 13, treino: "Luta", class: localStorage.getItem("13")},
  ]; 

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private toast: ToastController
  ) {}

  ionViewDidLoad() {
  }

  salvar(id){
    if(this.treinosList[id -6].class !== "checkmark"){
      this.treinosList[id -6].class = "checkmark";

      this.checado = this.treinosList[id-6].class;

      localStorage.setItem(this.treinosList[id-6].id, this.treinosList[id-6].class);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }else{
      this.treinosList[id -6].class = "";
      localStorage.setItem(this.treinosList[id-6].id, this.treinosList[id-6].class);

      this.checado = localStorage.getItem(id);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }

    return this.treinosList; 
  }

}