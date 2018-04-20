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
  templateUrl: 'aula5-n6.html',
})
export class Nivel6_aula5Page {

  checado: string;

  treinosList: any[] = [
    {id: 366, treino: "Ponto Fook Sao, Palma - 4x10", class: localStorage.getItem("366")},
    {id: 367, treino: "Treino Fook Sao, Palma Por dentro da guarda - 4x10", class: localStorage.getItem("367")},
    {id: 368, treino: "Treino Fook Sao, Palma Por fora da guarda - 4x10", class: localStorage.getItem("368")},
    {id: 369, treino: "Treino Huen Sao vira Pak Sao mesmo braço - 4x10", class: localStorage.getItem("369")},
    {id: 370, treino: "Treino Huen Sao vira Pak Sao conta (um, dois) - 4x10", class: localStorage.getItem("370")},
  ]; 

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private toast: ToastController
  ) {}

  ionViewDidLoad() {
  }

  salvar(id){
    if(this.treinosList[id -366].class !== "checkmark"){
      this.treinosList[id -366].class = "checkmark";

      this.checado = this.treinosList[id-366].class;

      localStorage.setItem(this.treinosList[id-366].id, this.treinosList[id-366].class);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }else{
      this.treinosList[id -366].class = "";
      localStorage.setItem(this.treinosList[id-366].id, this.treinosList[id-366].class);

      this.checado = localStorage.getItem(id);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }

    return this.treinosList; 
  }

}