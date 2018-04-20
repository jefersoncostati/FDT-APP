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
  selector: 'page-nivel-8',
  templateUrl: 'fase-1.html',
})
export class Fase_1Page {

  treinosList: any[] = [
    {id: 542, treino: "Siu lim Tao, Chum Kiu. Biu Jee, Forma Pessoal e Mook Yan Jang", valor: localStorage.getItem("542")},
    {id: 543, treino: "Passo E-D em Mah Bo iniciando com a perna frontal - 40x cada lado", valor: localStorage.getItem("543")},
    {id: 544, treino: "Jin Kuen em Mah Bo 4F/4T - 10x cada lado", valor: localStorage.getItem("544")},
    {id: 545, treino: "Número 7 - 40x cada lado", valor: localStorage.getItem("545")},
    {id: 546, treino: "Luta 1x1 - 3min", valor: localStorage.getItem("546")},
    {id: 547, treino: "Avança e recua em Mah Bo - 40x cada lado", valor: localStorage.getItem("547")},
    {id: 548, treino: "Passo E-D em Mah Bo iniciando com a perna de trás - 40x cada lado", valor: localStorage.getItem("548")},
    {id: 549, treino: "Din Kuen em Gong Bo / recuar em Mah Bo - 40x cada lado", valor: localStorage.getItem("549")},
    {id: 550, treino: "Torcer bastão cima/baixo - 40x cada lado", valor: localStorage.getItem("550")},
    {id: 551, treino: "Luta Faca vs Faca - Melhor de três", valor: localStorage.getItem("551")},
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

  incrementTreinosList(id) {
    this.treinosList[id - 542].valor++;
    localStorage.setItem(this.treinosList[id - 542].id, this.treinosList[id - 542].valor);

    if (this.treinosList[id - 542].valor === 12) {
      this.toast.create({ message: this.treinosList[id - 542].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
    }
  }

  decrementTreinosList(id) {
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
            this.treinosList[id - 542].valor--;
            localStorage.setItem(this.treinosList[id - 542].id, this.treinosList[id - 542].valor);
            this.toast.create({ message: this.treinosList[id - 542].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
          }
        }
      ]
    });
    prompt.present();
  }
}