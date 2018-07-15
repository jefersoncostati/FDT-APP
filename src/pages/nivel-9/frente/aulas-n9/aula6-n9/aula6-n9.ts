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
  templateUrl: 'aula6-n9.html',
})
export class Nivel9_aula6Page {

  checado: string;

  treinosList: any[] = [
    {id: 705, treino: "Todas as Formas", class: localStorage.getItem("705")},
    {id: 706, treino: "Ponto Kiu Dao - 4x10", class: localStorage.getItem("706")},
    {id: 707, treino: "Treino Kiu Dao Fak Da - 4x10", class: localStorage.getItem("707")},
    {id: 708, treino: "Ponto Kiu Dao / Fak Jam Da - 4x10", class: localStorage.getItem("708")},
    {id: 709, treino: "Revisão A1 - 1x5", class: localStorage.getItem("709")},
    {id: 710, treino: "Revisão A2 - 1x5", class: localStorage.getItem("710")},
    {id: 711, treino: "Revisão A3 - 1x5", class: localStorage.getItem("711")},
    {id: 712, treino: "Revisão A4 - 2x10", class: localStorage.getItem("712")},
    {id: 713, treino: "Revisão A5 - 3x10", class: localStorage.getItem("713")}
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
    if(this.treinosList[id -705].class !== "checkmark"){
      this.treinosList[id -705].class = "checkmark";

      this.checado = this.treinosList[id-705].class;

      localStorage.setItem(this.treinosList[id-705].id, this.treinosList[id-705].class);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }else{
      this.treinosList[id -705].class = "";
      localStorage.setItem(this.treinosList[id-705].id, this.treinosList[id-705].class);

      this.checado = localStorage.getItem(id);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }

    return this.treinosList; 
  }
}