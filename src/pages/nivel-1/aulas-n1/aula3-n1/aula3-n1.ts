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
  templateUrl: 'aula3-n1.html',
})
export class Nivel1_aula3Page {

  checado: string;

  treinosList: any[] = [
    {id: 14, treino: "Forma Siu Lim Tao", class: localStorage.getItem("14")},
    {id: 15, treino: "Ponto Tan Da - 4x10", class: localStorage.getItem("15")},
    {id: 16, treino: "Treino Tan Da - 4x10", class: localStorage.getItem("16")},
    {id: 17, treino: "Ponto Fok Da - 4x10", class: localStorage.getItem("17")},
    {id: 18, treino: "Treino Fok Da, palma baixa - 4x10", class: localStorage.getItem("18")},
    {id: 19, treino: "Treino Tan contra soco alto, Fok contra soco baixo - 4x10", class: localStorage.getItem("19")},
    {id: 20, treino: "Wu Da com passo (triangulando) - 4x10", class: localStorage.getItem("20")},
    {id: 21, treino: "Revisão N1 A1 - 2x10", class: localStorage.getItem("21")},
    {id: 22, treino: "Revisão N1 A2 - 3x10", class: localStorage.getItem("22")},
    {id: 23, treino: "Luta", class: localStorage.getItem("23")},
  ]; 

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private toast: ToastController
  ) {}

  ionViewDidLoad() {
  }

  salvar(id){
    if(this.treinosList[id -14].class !== "checkmark"){
      this.treinosList[id -14].class = "checkmark";

      this.checado = this.treinosList[id-14].class;

      localStorage.setItem(this.treinosList[id-14].id, this.treinosList[id-14].class);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }else{
      this.treinosList[id -14].class = "";
      localStorage.setItem(this.treinosList[id-14].id, this.treinosList[id-14].class);

      this.checado = localStorage.getItem(id);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }

    return this.treinosList; 
  }

}