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
  templateUrl: 'aula10-n7.html',
})
export class Nivel7_aula10Page {

  checado: string;

  treinosList: any[] = [
    {id: 519, treino: "Formas", class: localStorage.getItem("519")},
    {id: 520, treino: "Jut Sao / Pak Da (palma baixa) triangulando - 4x10", class: localStorage.getItem("520")},
    {id: 521, treino: "Jut Sao + Tan / Jut Guerk + Pak Sao - 4x10", class: localStorage.getItem("521")},
    {id: 522, treino: "Lap Sao duplo / Jut Guerk na perna de apoio - 4x10", class: localStorage.getItem("522")},
    {id: 523, treino: "Revisão até aula 9 - 1x10", class: localStorage.getItem("523")},
  ]; 

  lutas: any[] = [
    {id: 524, treino: "Lutas", valor: localStorage.getItem("524")}
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
    if(this.treinosList[id -519].class !== "checkmark"){
      this.treinosList[id -519].class = "checkmark";

      this.checado = this.treinosList[id-519].class;

      localStorage.setItem(this.treinosList[id-519].id, this.treinosList[id-519].class);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }else{
      this.treinosList[id -519].class = "";
      localStorage.setItem(this.treinosList[id-519].id, this.treinosList[id-519].class);

      this.checado = localStorage.getItem(id);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }

    return this.treinosList; 
  }

  incrementLutas(id) {
    this.lutas[id - 524].valor++;
    localStorage.setItem(this.lutas[id - 524].id, this.lutas[id - 524].valor);

    if (this.lutas[id - 524].valor === 7) {
      this.toast.create({ message: this.lutas[id - 524].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
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
            this.lutas[id - 524].valor--;
            localStorage.setItem(this.lutas[id - 524].id, this.lutas[id - 524].valor);
            this.toast.create({ message: this.lutas[id - 524].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
          }
        }
      ]
    });
    prompt.present();
  }

}