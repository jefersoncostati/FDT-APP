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
  selector: 'page-nivel-3',
  templateUrl: 'aula5-n3.html',
})
export class Nivel3_aula5Page {

  checado: string;

  treinosList: any[] = [
    {id: 203, treino: "Forma as três conforme exporstas na Aula 1 Nível 3", class: localStorage.getItem("203")},
    {id: 204, treino: "Revisão N3 A1 - 1x5", class: localStorage.getItem("204")},
    {id: 205, treino: "Revisão N3 A3 - 2x10", class: localStorage.getItem("205")},
    {id: 206, treino: "Tan Chi sao 1 - 4x10", class: localStorage.getItem("206")},
    {id: 207, treino: "Tan Chi Sao 2 - 4x10", class: localStorage.getItem("207")},
    {id: 208, treino: "Tan Chi Sao 3 - 4x10", class: localStorage.getItem("208")},
    {id: 209, treino: "Tan Chi Sao livre - até o final da aula", class: localStorage.getItem("209")},
  ]; 

  lutas: any[] = [
    {id: 210, treino: "Lutas", valor: localStorage.getItem("210")}
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
    if(this.treinosList[id - 203].class !== "checkmark"){
      this.treinosList[id - 203].class = "checkmark";

      this.checado = this.treinosList[id-203].class;

      localStorage.setItem(this.treinosList[id-203].id, this.treinosList[id-203].class);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }else{
      this.treinosList[id -203].class = "";
      localStorage.setItem(this.treinosList[id-203].id, this.treinosList[id-203].class);

      this.checado = localStorage.getItem(id);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }

    return this.treinosList; 
  }

  incrementLutas(id) {
    this.lutas[id - 210].valor++;
    localStorage.setItem(this.lutas[id - 210].id, this.lutas[id - 210].valor);

    if (this.lutas[id - 210].valor === 3) {
      this.toast.create({ message: this.lutas[id - 210].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
    }
  }

  decrementLutas(id) {
    let prompt = this.alertCtrl.create({
      title: 'Remover',
      message: "Tem certeza que deseja remover uma luta da lista?",
      buttons: [
        {
          text: 'Não',
          handler: data => {
            this.toast.create({ message: 'Não houve alterações', duration: 3000, position: 'botton' }).present();
          }
        },
        {
          text: 'Sim',
          handler: data => {
            this.lutas[id - 210].valor--;
            localStorage.setItem(this.lutas[id - 210].id, this.lutas[id - 210].valor);
            this.toast.create({ message: this.lutas[id - 210].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
          }
        }
      ]
    });
    prompt.present();
  }

}