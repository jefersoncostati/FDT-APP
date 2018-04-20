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
  templateUrl: 'fase-3.html',
})
export class Fase_3Page {

    treinosList: any[] = [
        {id: 666, treino: "Siu lim Tao, Chum Kiu. Biu Jee, Forma Pessoal e Mook Yan Jang", valor: localStorage.getItem("666")},
        {id: 667, treino: "Treino Jut Kwan / Tai Kwan - 40x cada lado cada papel", valor: localStorage.getItem("667")},
        {id: 668, treino: "Treino Jut Kwan / Tai Kwan - 10x cada lado cada papel", valor: localStorage.getItem("668")},
        {id: 669, treino: "Chi Kwan - Rounds de 3min", valor: localStorage.getItem("669")},
        {id: 670, treino: "Luta 1x1 - 3min", valor: localStorage.getItem("670")},
        {id: 671, treino: "Look Dim Boon Kwan", valor: localStorage.getItem("671")},
        {id: 672, treino: "Treino Tan Kwan Dentro/Fora - 40x cada lado cada papel", valor: localStorage.getItem("672")},
        {id: 673, treino: "Treino Tan Kwan Dentro/Fora - 40x cada lado cada papel", valor: localStorage.getItem("673")},
        {id: 674, treino: "Luta Bastão vs Bastão - melhor de 3", valor: localStorage.getItem("674")},
        {id: 675, treino: "Luta Faca vs Faca - melhor de 3", valor: localStorage.getItem("675")},
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
    this.treinosList[id - 666].valor++;
    localStorage.setItem(this.treinosList[id - 666].id, this.treinosList[id - 666].valor);

    if (this.treinosList[id - 666].valor === 12) {
      this.toast.create({ message: this.treinosList[id - 666].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
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
            this.treinosList[id - 666].valor--;
            localStorage.setItem(this.treinosList[id - 666].id, this.treinosList[id - 666].valor);
            this.toast.create({ message: this.treinosList[id - 666].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
          }
        }
      ]
    });
    prompt.present();
  }
}