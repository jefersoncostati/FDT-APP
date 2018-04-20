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
  templateUrl: 'aula1-n1.html',
})
export class Nivel1_aula1Page {

  checado: string;

  treinosList: any[] = [
    {id: 1, treino: "Forma Siu Lim Tao", class: localStorage.getItem("1")},
    {id: 2, treino: "Treino Erguer Antebraço por fora - 4x10", class: localStorage.getItem("2")},
    {id: 3, treino: "Treino Erguer Antebraço por dentro - 4x10", class: localStorage.getItem("3")},
    {id: 4, treino: "Treino Controle de cotovelo - 4x10", class: localStorage.getItem("4")},
    {id: 5, treino: "Luta", class: localStorage.getItem("5")},
  ]; 

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private toast: ToastController
  ) {}

  ionViewDidLoad() {
  }

  salvar(id){
    if(this.treinosList[id -1].class !== "checkmark"){
      this.treinosList[id -1].class = "checkmark";

      this.checado = this.treinosList[id-1].class;

      localStorage.setItem(this.treinosList[id-1].id, this.treinosList[id-1].class);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }else{
      this.treinosList[id -1].class = "";
      localStorage.setItem(this.treinosList[id-1].id, this.treinosList[id-1].class);

      this.checado = localStorage.getItem(id);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }

    return this.treinosList; 
  }

}