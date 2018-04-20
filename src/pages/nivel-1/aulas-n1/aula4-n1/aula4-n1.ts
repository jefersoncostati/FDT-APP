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
  templateUrl: 'aula4-n1.html',
})
export class Nivel1_aula4Page {

  checado: string;

  treinosList: any[] = [
    {id: 24, treino: "Forma Siu Lim Tao", class: localStorage.getItem("24")},
    {id: 25, treino: "Ponto Pak Curto - 4x10", class: localStorage.getItem("25")},
    {id: 26, treino: "Ponto Pak Longo - 4x10", class: localStorage.getItem("26")},
    {id: 27, treino: "Treino Ciclo de Pak Sao - 4x10", class: localStorage.getItem("27")},
    {id: 28, treino: "Treino Pak Sao adiantado - 4x10", class: localStorage.getItem("28")},
    {id: 29, treino: "Ponto Pak, Tan Da - 4x10", class: localStorage.getItem("29")},
    {id: 30, treino: "Treino Pak, Tan Da - 4x10", class: localStorage.getItem("30")},
    {id: 31, treino: "Treino Pak Da com braço colado - 4x10", class: localStorage.getItem("31")},
    {id: 32, treino: "Revisão N1 A1 - 1x10", class: localStorage.getItem("32")},
    {id: 33, treino: "Revisão N1 A2 - 2x10", class: localStorage.getItem("33")},
    {id: 34, treino: "Revisão N1 A3 - 3x10", class: localStorage.getItem("34")},
    {id: 35, treino: "Luta", class: localStorage.getItem("35")},
  ]; 

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private toast: ToastController
  ) {}

  ionViewDidLoad() {
  }

  salvar(id){
    if(this.treinosList[id -24].class !== "checkmark"){
      this.treinosList[id -24].class = "checkmark";

      this.checado = this.treinosList[id-24].class;

      localStorage.setItem(this.treinosList[id-24].id, this.treinosList[id-24].class);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }else{
      this.treinosList[id -24].class = "";
      localStorage.setItem(this.treinosList[id-24].id, this.treinosList[id-24].class);

      this.checado = localStorage.getItem(id);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }

    return this.treinosList; 
  }

}