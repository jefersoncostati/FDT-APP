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
  templateUrl: 'aula9-n1.html',
})
export class Nivel1_aula9Page {

  checado: string;

  treinosList: any[] = [
    {id: 53, treino: "Revisão N1 A7", class: localStorage.getItem("53")},
    {id: 54, treino: "Luta de um toque até o final da aula", class: localStorage.getItem("54")},
    {id: 55, treino: "Luta", class: localStorage.getItem("55")},
  ]; 

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private toast: ToastController
  ) {}

  ionViewDidLoad() {
  }

  salvar(id){
    if(this.treinosList[id -53].class !== "checkmark"){
      this.treinosList[id -53].class = "checkmark";

      this.checado = this.treinosList[id-53].class;

      localStorage.setItem(this.treinosList[id-53].id, this.treinosList[id-53].class);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }else{
      this.treinosList[id -53].class = "";
      localStorage.setItem(this.treinosList[id-53].id, this.treinosList[id-53].class);

      this.checado = localStorage.getItem(id);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }

    return this.treinosList; 
  }

}