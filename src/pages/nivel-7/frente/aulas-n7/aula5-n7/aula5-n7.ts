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
  templateUrl: 'aula5-n7.html',
})
export class Nivel7_aula5Page {

  checado: string;

  treinosList: any[] = [
    {id: 492, treino: "Formas", class: localStorage.getItem("492")},
    {id: 493, treino: "Revisão da aula 1 até a aula 4 - 2x10", class: localStorage.getItem("493")},
  ]; 

  lutas: any[] = [
    {id: 494, treino: "Lutas", valor: localStorage.getItem("494")}
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
    if(this.treinosList[id -492].class !== "checkmark"){
      this.treinosList[id -492].class = "checkmark";

      this.checado = this.treinosList[id-492].class;

      localStorage.setItem(this.treinosList[id-492].id, this.treinosList[id-492].class);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }else{
      this.treinosList[id -492].class = "";
      localStorage.setItem(this.treinosList[id-492].id, this.treinosList[id-492].class);

      this.checado = localStorage.getItem(id);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }

    return this.treinosList; 
  }

  incrementLutas(id) {
    this.lutas[id - 494].valor++;
    localStorage.setItem(this.lutas[id - 494].id, this.lutas[id - 494].valor);

    if (this.lutas[id - 494].valor === 7) {
      this.toast.create({ message: this.lutas[id - 494].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
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
            this.lutas[id - 494].valor--;
            localStorage.setItem(this.lutas[id - 494].id, this.lutas[id - 494].valor);
            this.toast.create({ message: this.lutas[id - 494].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
          }
        }
      ]
    });
    prompt.present();
  }

}