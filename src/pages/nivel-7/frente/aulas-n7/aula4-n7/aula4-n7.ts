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
  templateUrl: 'aula4-n7.html',
})
export class Nivel7_aula4Page {

  checado: string;

  treinosList: any[] = [
    {id: 484, treino: "Formas", class: localStorage.getItem("484")},
    {id: 485, treino: "Huen Sao externo / Palma baixa - 4x10", class: localStorage.getItem("485")},
    {id: 486, treino: "Tan / Fook alternando nas guardas - 4x10", class: localStorage.getItem("486")},
    {id: 487, treino: "Pon / Tan Da - 4x10", class: localStorage.getItem("487")},
    {id: 488, treino: "Revisão aula 1 - 1x10", class: localStorage.getItem("488")},
    {id: 489, treino: "Revisão aula 2 - 2x10", class: localStorage.getItem("489")},
    {id: 490, treino: "Revisao aula 3 - 3x10", class: localStorage.getItem("490")},
  ]; 

  lutas: any[] = [
    {id: 491, treino: "Lutas", valor: localStorage.getItem("491")}
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
    if(this.treinosList[id -484].class !== "checkmark"){
      this.treinosList[id -484].class = "checkmark";

      this.checado = this.treinosList[id-484].class;

      localStorage.setItem(this.treinosList[id-484].id, this.treinosList[id-484].class);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }else{
      this.treinosList[id -484].class = "";
      localStorage.setItem(this.treinosList[id-484].id, this.treinosList[id-484].class);

      this.checado = localStorage.getItem(id);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }

    return this.treinosList; 
  }

  incrementLutas(id) {
    this.lutas[id - 491].valor++;
    localStorage.setItem(this.lutas[id - 491].id, this.lutas[id - 491].valor);

    if (this.lutas[id - 491].valor === 7) {
      this.toast.create({ message: this.lutas[id - 491].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
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
            this.lutas[id - 491].valor--;
            localStorage.setItem(this.lutas[id - 491].id, this.lutas[id - 491].valor);
            this.toast.create({ message: this.lutas[id - 491].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
          }
        }
      ]
    });
    prompt.present();
  }

}