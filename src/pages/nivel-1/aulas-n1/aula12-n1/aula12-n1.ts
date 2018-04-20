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
  templateUrl: 'aula12-n1.html',
})
export class Nivel1_aula12Page {

  checado: string;

  treinosList: any[] = [
    {id: 61, treino: "Luta de um toque ate o final da aula", class: localStorage.getItem("61")},
    {id: 62, treino: "Luta", class: localStorage.getItem("62")},
    {id: 63, treino: "Ao chegar aqui, solicitar avaliação ao seu instrutor", class: localStorage.getItem("63")},
  ]; 

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private toast: ToastController
  ) {}

  ionViewDidLoad() {
  }

  salvar(id){
    if(this.treinosList[id -61].class !== "checkmark"){
      this.treinosList[id -61].class = "checkmark";

      this.checado = this.treinosList[id-61].class;

      localStorage.setItem(this.treinosList[id-61].id, this.treinosList[id-61].class);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }else{
      this.treinosList[id -61].class = "";
      localStorage.setItem(this.treinosList[id-61].id, this.treinosList[id-61].class);

      this.checado = localStorage.getItem(id);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }

    return this.treinosList; 
  }

}