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
  templateUrl: 'aula2-n6.html',
})
export class Nivel6_aula2Page {

  checado: string;

  treinosList: any[] = [
    {id: 352, treino: "Ponto Kwai Jang, Biu Sao - 4x10", class: localStorage.getItem("352")},
    {id: 353, treino: "Treino Biu Sao, Lap Da contra restrição de cotovelo - 4x10", class: localStorage.getItem("353")},
    {id: 354, treino: "Ponto Kap Jang - 4x10", class: localStorage.getItem("354")},
    {id: 355, treino: "Treino kap Jang contra restrição de pulso por fora - 4x10", class: localStorage.getItem("355")},
    {id: 356, treino: "Ponto Pai Jang - 4x10", class: localStorage.getItem("356")},
    {id: 357, treino: "Fluência indefinida em distância de contovelo - 4x10", class: localStorage.getItem("357")},
  ]; 

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private toast: ToastController
  ) {}

  ionViewDidLoad() {
  }

  salvar(id){
    if(this.treinosList[id -352].class !== "checkmark"){
      this.treinosList[id -352].class = "checkmark";

      this.checado = this.treinosList[id-352].class;

      localStorage.setItem(this.treinosList[id-352].id, this.treinosList[id-352].class);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }else{
      this.treinosList[id -352].class = "";
      localStorage.setItem(this.treinosList[id-352].id, this.treinosList[id-352].class);

      this.checado = localStorage.getItem(id);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }

    return this.treinosList; 
  }

}