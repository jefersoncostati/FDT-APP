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
  templateUrl: 'aula12-n3.html',
})
export class Nivel3_aula12Page {

  checado: string;

  treinosList: any[] = [
    {id: 259, treino: "Formas (as três) conforme expostas na Aula 1 do Nivel 3", class: localStorage.getItem("259")},
    {id: 260, treino: "Forma – Refinar, aperfeiçoar, acrescentar e/ou retirar movimentos da forma pessoal de forma que ela resuma com perfeição tudo visto até agora, adaptado ao seu uso e estilo pessoais", class: localStorage.getItem("260")},
    {id: 261, treino: "Ao chegar aqui, solicitar avaliação ao instrutor", class: localStorage.getItem("261")},
  ]; 

  lutas: any[] = [
    {id: 262, treino: "Lutas", valor: localStorage.getItem("262")}
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
    if(this.treinosList[id -259].class !== "checkmark"){
      this.treinosList[id -259].class = "checkmark";

      this.checado = this.treinosList[id-259].class;

      localStorage.setItem(this.treinosList[id-259].id, this.treinosList[id-259].class);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }else{
      this.treinosList[id -259].class = "";
      localStorage.setItem(this.treinosList[id-259].id, this.treinosList[id-259].class);

      this.checado = localStorage.getItem(id);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }

    return this.treinosList; 
  }

  incrementLutas(id) {
    this.lutas[id - 262].valor++;
    localStorage.setItem(this.lutas[id - 262].id, this.lutas[id - 262].valor);

    if (this.lutas[id - 262].valor === 3) {
      this.toast.create({ message: this.lutas[id - 262].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
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
            this.lutas[id - 262].valor--;
            localStorage.setItem(this.lutas[id - 262].id, this.lutas[id - 262].valor);
            this.toast.create({ message: this.lutas[id - 262].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
          }
        }
      ]
    });
    prompt.present();
  }

}