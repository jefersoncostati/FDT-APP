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
  templateUrl: 'aula7-n7.html',
})
export class Nivel7_aula7Page {

  checado: string;

  treinosList: any[] = [
    {id: 501, treino: "Formas", class: localStorage.getItem("501")},
    {id: 502, treino: "Pon Sao / Po Pai Chang por dentro(2) - 4x10", class: localStorage.getItem("502")},
    {id: 503, treino: "Kan Sao / Po Pai Chang(3) - 4x10", class: localStorage.getItem("503")},
    {id: 504, treino: "Kan Sao / Po Pai (por fora) Chang(4) - 4x10", class: localStorage.getItem("504")},
    {id: 505, treino: "Revisão até aula 6 - 1x10", class: localStorage.getItem("505")},
  ]; 

  lutas: any[] = [
    {id: 506, treino: "Lutas", valor: localStorage.getItem("506")}
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
    if(this.treinosList[id -501].class !== "checkmark"){
      this.treinosList[id -501].class = "checkmark";

      this.checado = this.treinosList[id-501].class;

      localStorage.setItem(this.treinosList[id-501].id, this.treinosList[id-501].class);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }else{
      this.treinosList[id -501].class = "";
      localStorage.setItem(this.treinosList[id-501].id, this.treinosList[id-501].class);

      this.checado = localStorage.getItem(id);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }

    return this.treinosList; 
  }

  incrementLutas(id) {
    this.lutas[id - 506].valor++;
    localStorage.setItem(this.lutas[id - 506].id, this.lutas[id - 506].valor);

    if (this.lutas[id - 506].valor === 7) {
      this.toast.create({ message: this.lutas[id - 506].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
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
            this.lutas[id - 506].valor--;
            localStorage.setItem(this.lutas[id - 506].id, this.lutas[id - 506].valor);
            this.toast.create({ message: this.lutas[id - 506].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
          }
        }
      ]
    });
    prompt.present();
  }

}