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
  templateUrl: 'aula12-n6.html',
})
export class Nivel6_aula12Page {

  checado: string;

  treinosList: any[] = [
    {id: 393, treino: "Revisão dos geral - 1x5 todos Pontos e Treinos desde o nível 1", class: localStorage.getItem("393")},
    {id: 394, treino: "Corrigir, reformular e adaptar forma pessoal", class: localStorage.getItem("394")},
  ]; 

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private toast: ToastController
  ) {}

  ionViewDidLoad() {
  }

  salvar(id){
    if(this.treinosList[id -393].class !== "checkmark"){
      this.treinosList[id -393].class = "checkmark";

      this.checado = this.treinosList[id-393].class;

      localStorage.setItem(this.treinosList[id-393].id, this.treinosList[id-393].class);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }else{
      this.treinosList[id -393].class = "";
      localStorage.setItem(this.treinosList[id-393].id, this.treinosList[id-393].class);

      this.checado = localStorage.getItem(id);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }

    return this.treinosList; 
  }

}