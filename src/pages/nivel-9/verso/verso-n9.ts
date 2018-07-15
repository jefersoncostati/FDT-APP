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
  selector: 'page-verso-n9',
  templateUrl: 'verso-n9.html',
})
export class VersoN_9Page {

  aulasPadrao: any[] = [
    {id: 744, treino: "Fluência Indefinida contra Baat Jaam Dao - 3min", valor: localStorage.getItem("744")},
    {id: 745, treino: "Fluência Indefinida contra Bastão - 3min", valor: localStorage.getItem("745")},
    {id: 746, treino: "Fluência Indefinida contra Espada Longa - 3min", valor: localStorage.getItem("746")},
    {id: 747, treino: "Três Lutas - 3min", valor: localStorage.getItem("747")}
  ];

  aulasImpares: any[] = [
    { id: 748, treino: "Luta com Faca - 3min", valor: localStorage.getItem("748") },
    { id: 749, treino: "Intensivo contra Bastão - 3 min", valor: localStorage.getItem("749") },
    { id: 750, treino: "Luta contra Vários Oponentes - 3min", valor: localStorage.getItem("750") },
    { id: 751, treino: "Chi Sao Vendando - 3min", valor: localStorage.getItem("751") },
    { id: 752, treino: "Chi Gerk - 3min", valor: localStorage.getItem("752") },
  ];

  aulasPares: any[] = [
    { id: 753, treino: "Intensivo contra Faca - 3min", valor: localStorage.getItem("753") },
    { id: 754, treino: "Intensivo contra Chutes - 3 min", valor: localStorage.getItem("754") },
    { id: 755, treino: "Chi Sao com Faca Vendado - 3min", valor: localStorage.getItem("755") },
    { id: 756, treino: "Escapar do Chão uma vez", valor: localStorage.getItem("756") },
    { id: 757, treino: "Fluência Indefinida - 3min", valor: localStorage.getItem("757") },
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
    this.aulasImpares[id - 748].valor++;
    localStorage.setItem(this.aulasImpares[id - 748].id, this.aulasImpares[id - 748].valor);

    if (this.aulasImpares[id - 748].valor === 6) {
      this.toast.create({ message: this.aulasImpares[id - 748].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
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
            this.aulasImpares[id - 748].valor--;
            localStorage.setItem(this.aulasImpares[id - 748].id, this.aulasImpares[id - 748].valor);
            this.toast.create({ message: this.aulasImpares[id - 748].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
          }
        }
      ]
    });
    prompt.present();
  }

  incrementAulasPares(id) {
    this.aulasPares[id - 753].valor++;
    localStorage.setItem(this.aulasPares[id - 753].id, this.aulasPares[id - 753].valor);

    if (this.aulasPares[id - 753].valor === 6) {
      this.toast.create({ message: this.aulasPares[id - 753].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
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
            this.aulasPares[id - 753].valor--;
            localStorage.setItem(this.aulasPares[id - 753].id, this.aulasPares[id - 753].valor);
            this.toast.create({ message: this.aulasPares[id - 753].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
          }
        }
      ]
    });
    prompt.present();
  }

  incrementAulasPadrao(id) {
    this.aulasPadrao[id - 744].valor++;
    localStorage.setItem(this.aulasPadrao[id - 744].id, this.aulasPadrao[id - 744].valor);

    if (this.aulasPadrao[id - 744].valor == 10) {
      this.toast.create({ message: this.aulasPadrao[id - 744].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
    }
  }

  decrementAulasPadrao(id) {
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
            this.aulasPadrao[id - 744].valor--;
            localStorage.setItem(this.aulasPadrao[id - 744].id, this.aulasPadrao[id - 744].valor);
            this.toast.create({ message: this.aulasPadrao[id - 744].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
          }
        }
      ]
    });
    prompt.present();
  }
}