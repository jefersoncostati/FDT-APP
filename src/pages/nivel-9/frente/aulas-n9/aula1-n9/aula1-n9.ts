import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';

/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-frente-n9',
  templateUrl: 'aula1-n9.html',
})
export class Nivel9_aula1Page {

  checado: string;

  treinosList: any[] = [
    {id: 676, treino: "Todas as Formas", class: localStorage.getItem("676")},
    {id: 677, treino: "Ponto Chum Sum Gerk, Kwan Dao (Chute reto, bloqueio duplo) - 4x10", class: localStorage.getItem("677")},
  ]; 

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private toast: ToastController,
    public alertCtrl: AlertController
  ) {}

  ionViewDidLoad() {
  }

  salvar(id){
    if(this.treinosList[id -676].class !== "checkmark"){
      this.treinosList[id -676].class = "checkmark";

      this.checado = this.treinosList[id-676].class;

      localStorage.setItem(this.treinosList[id-676].id, this.treinosList[id-676].class);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }else{
      this.treinosList[id -676].class = "";
      localStorage.setItem(this.treinosList[id-676].id, this.treinosList[id-676].class);

      this.checado = localStorage.getItem(id);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }

    return this.treinosList; 
  }
}