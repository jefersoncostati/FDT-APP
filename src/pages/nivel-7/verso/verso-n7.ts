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
  selector: 'page-verso-n7',
  templateUrl: 'verso-n7.html',
})
export class VersoN_7Page {

  aulasImpares: any[] = [
    { id: 532, treino: "Boneco de Madeira Livre - 3min", valor: localStorage.getItem("532") },
    { id: 533, treino: "Fluencia Indefinida - 3 min", valor: localStorage.getItem("533") },
    { id: 534, treino: "Intensivo contra Faca - 3min", valor: localStorage.getItem("534") },
    { id: 535, treino: "Chi Sao - 3min", valor: localStorage.getItem("535") },
    { id: 536, treino: "Luta contra Vários Oponentes - 3min", valor: localStorage.getItem("536") },
  ];

  aulasPares: any[] = [
    { id: 537, treino: "Boneco de Madeira Livre - 3min", valor: localStorage.getItem("537") },
    { id: 538, treino: "Intensivo contra Chutes - 3 min", valor: localStorage.getItem("538") },
    { id: 539, treino: "Intensivo contra Bastão - 3min", valor: localStorage.getItem("539") },
    { id: 540, treino: "Chi Gerk ", valor: localStorage.getItem("540") },
    { id: 541, treino: "Luta com Faca - 3min", valor: localStorage.getItem("541") },
  ];


 

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private toast: ToastController,
    public alertCtrl: AlertController,
  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Verso_Page');
  }

  incrementAulasImpares(id) {
    this.aulasImpares[id - 532].valor++;
    localStorage.setItem(this.aulasImpares[id - 532].id, this.aulasImpares[id - 532].valor);

    if (this.aulasImpares[id - 532].valor === 6) {
      this.toast.create({ message: this.aulasImpares[id - 532].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
    }
  }

  decrementAulasImpares(id) {
    let prompt = this.alertCtrl.create({
      title: 'Remover',
      message: "Tem certeza que deseja remover um treino da lista?",
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
            this.aulasImpares[id - 532].valor--;
            localStorage.setItem(this.aulasImpares[id - 532].id, this.aulasImpares[id - 532].valor);
            this.toast.create({ message: this.aulasImpares[id - 532].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
          }
        }
      ]
    });
    prompt.present();
  }

  incrementAulasPares(id) {
    this.aulasPares[id - 537].valor++;
    localStorage.setItem(this.aulasPares[id - 537].id, this.aulasPares[id - 537].valor);

    if (this.aulasPares[id - 537].valor === 6) {
      this.toast.create({ message: this.aulasPares[id - 537].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
    }
  }

  decrementAulasPares(id) {
    let prompt = this.alertCtrl.create({
      title: 'Remover',
      message: "Tem certeza que deseja remover um treino da lista?",
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
            this.aulasPares[id - 537].valor--;
            localStorage.setItem(this.aulasPares[id - 537].id, this.aulasPares[id - 537].valor);
            this.toast.create({ message: this.aulasPares[id - 537].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
          }
        }
      ]
    });
    prompt.present();
  }
}