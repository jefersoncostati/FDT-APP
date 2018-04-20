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
  selector: 'page-frente-n7',
  templateUrl: 'aula9-n7.html',
})
export class Nivel7_aula9Page {

  checado: string;

  treinosList: any[] = [
    {id: 513, treino: "Formas", class: localStorage.getItem("513")},
    {id: 514, treino: "Kan Sao invertido alternando - 4x10", class: localStorage.getItem("514")},
    {id: 515, treino: "Guan Sao invertido / Tan Sao palma - 4x10", class: localStorage.getItem("515")},
    {id: 516, treino: "San Ding Gerk - 4x10", class: localStorage.getItem("516")},
    {id: 517, treino: "Revisão até aula 8 - 1x10", class: localStorage.getItem("517")},
  ]; 

  lutas: any[] = [
    {id: 518, treino: "Lutas", valor: localStorage.getItem("518")}
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
    if(this.treinosList[id -513].class !== "checkmark"){
      this.treinosList[id -513].class = "checkmark";

      this.checado = this.treinosList[id-513].class;

      localStorage.setItem(this.treinosList[id-513].id, this.treinosList[id-513].class);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }else{
      this.treinosList[id -513].class = "";
      localStorage.setItem(this.treinosList[id-513].id, this.treinosList[id-513].class);

      this.checado = localStorage.getItem(id);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }

    return this.treinosList; 
  }

  incrementLutas(id) {
    this.lutas[id - 518].valor++;
    localStorage.setItem(this.lutas[id - 518].id, this.lutas[id - 518].valor);

    if (this.lutas[id - 518].valor === 7) {
      this.toast.create({ message: this.lutas[id - 518].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
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
            this.lutas[id - 518].valor--;
            localStorage.setItem(this.lutas[id - 518].id, this.lutas[id - 518].valor);
            this.toast.create({ message: this.lutas[id - 518].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
          }
        }
      ]
    });
    prompt.present();
  }

}