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
  templateUrl: 'fase-2.html',
})
export class Fase_2Page {

    treinosList: any[] = [
        {id: 552, treino: "Siu lim Tao, Chum Kiu. Biu Jee, Forma Pessoal e Mook Yan Jang", valor: localStorage.getItem("552")},
        {id: 553, treino: "Número 7 - 40x cada lado", valor: localStorage.getItem("553")},
        {id: 554, treino: "Biu Kwan em Mah Bo 4F/4T - 10x cada lado", valor: localStorage.getItem("554")},
        {id: 555, treino: "Jut Kwan / Tai Kwan - 40x cada lado", valor: localStorage.getItem("555")},
        {id: 556, treino: "Lau Soi - 40x cada lado", valor: localStorage.getItem("556")},
        {id: 557, treino: "Dai Biu Kwan - 40x cada lado", valor: localStorage.getItem("557")},
        {id: 558, treino: "Luta 1x1 - 3min", valor: localStorage.getItem("558")},
        {id: 559, treino: "Look Dim Boon Kwan", valor: localStorage.getItem("559")},
        {id: 560, treino: "Torcer Bastão cima/baixo - 40x cada lado", valor: localStorage.getItem("560")},
        {id: 561, treino: "Biu Kwan em Gong Bo / Tai Kwan em Mah Bo - 40x cada lado", valor: localStorage.getItem("561")},
        {id: 562, treino: "Tan Kwan dentro/fora - 40x cada lado", valor: localStorage.getItem("562")},
        {id: 563, treino: "Lan Kwan - 40x cada lado", valor: localStorage.getItem("563")},
        {id: 564, treino: "Bloqueia/Ataca 4 pontos - 10x cada lado", valor: localStorage.getItem("564")},
        {id: 565, treino: "Luta Faca vs Faca - melhor de três", valor: localStorage.getItem("565")},
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
    this.treinosList[id - 552].valor++;
    localStorage.setItem(this.treinosList[id - 552].id, this.treinosList[id - 552].valor);

    if (this.treinosList[id - 552].valor === 12) {
      this.toast.create({ message: this.treinosList[id - 552].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
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
            this.treinosList[id - 552].valor--;
            localStorage.setItem(this.treinosList[id - 552].id, this.treinosList[id - 552].valor);
            this.toast.create({ message: this.treinosList[id - 552].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
          }
        }
      ]
    });
    prompt.present();
  }
}