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
  templateUrl: 'aula6-n7.html',
})
export class Nivel7_aula6Page {

  checado: string;

  treinosList: any[] = [
    {id: 495, treino: "Formas", class: localStorage.getItem("495")},
    {id: 496, treino: "Bai Jee - 4x10", class: localStorage.getItem("496")},
    {id: 497, treino: "Bai Jee + Pon Da (palma baixa) Invertido - 4x10", class: localStorage.getItem("497")},
    {id: 498, treino: "Kan Sao invertido + Po Pai Chang(1) - 4x10", class: localStorage.getItem("498")},
    {id: 499, treino: "Repetir aula 5 1x10", class: localStorage.getItem("499")},
  ]; 

  lutas: any[] = [
    {id: 500, treino: "Lutas", valor: localStorage.getItem("500")}
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
    if(this.treinosList[id -495].class !== "checkmark"){
      this.treinosList[id -495].class = "checkmark";

      this.checado = this.treinosList[id-495].class;

      localStorage.setItem(this.treinosList[id-495].id, this.treinosList[id-495].class);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }else{
      this.treinosList[id -495].class = "";
      localStorage.setItem(this.treinosList[id-495].id, this.treinosList[id-495].class);

      this.checado = localStorage.getItem(id);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }

    return this.treinosList; 
  }

  incrementLutas(id) {
    this.lutas[id - 500].valor++;
    localStorage.setItem(this.lutas[id - 500].id, this.lutas[id - 500].valor);

    if (this.lutas[id - 500].valor === 7) {
      this.toast.create({ message: this.lutas[id - 500].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
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
            this.lutas[id - 500].valor--;
            localStorage.setItem(this.lutas[id - 500].id, this.lutas[id - 500].valor);
            this.toast.create({ message: this.lutas[id - 500].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
          }
        }
      ]
    });
    prompt.present();
  }

}