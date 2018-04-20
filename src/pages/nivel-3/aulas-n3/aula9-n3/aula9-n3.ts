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
  templateUrl: 'aula9-n3.html',
})
export class Nivel3_aula9Page {

  checado: string;

  treinosList: any[] = [
    {id: 236, treino: "Formas (as três) conforme expostas na Aula 1 do Nivel 3", class: localStorage.getItem("236")},
    {id: 237, treino: "Revisão de todos os Pontos e Treinos de repetição do Nível 3 até agora - 1x10", class: localStorage.getItem("237")},
    {id: 238, treino: "Treino – Pai Jang (Cotovelo Horizontal) X Lap Sao – 4 x 10", class: localStorage.getItem("238")},
    {id: 239, treino: "Treino – Jing Chang (Palma reta) – 2x20", class: localStorage.getItem("239")},
    {id: 240, treino: "Ponto – Pai Jang/Guang Sao/Kiu Sao – 4x10", class: localStorage.getItem("240")},
    {id: 241, treino: "Ponto – Kiu Sao/Soco – 4x10", class: localStorage.getItem("241")},
    {id: 242, treino: "Treino – Kiu Sao/Soco – 4x10", class: localStorage.getItem("242")},
    {id: 243, treino: "Ponto  – Fak Sao/Jut Sao – 4x10", class: localStorage.getItem("243")},
  ]; 

  lutas: any[] = [
    {id: 244, treino: "Lutas", valor: localStorage.getItem("244")}
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
    if(this.treinosList[id -236].class !== "checkmark"){
      this.treinosList[id -236].class = "checkmark";

      this.checado = this.treinosList[id-236].class;

      localStorage.setItem(this.treinosList[id-236].id, this.treinosList[id-236].class);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }else{
      this.treinosList[id -236].class = "";
      localStorage.setItem(this.treinosList[id-236].id, this.treinosList[id-236].class);

      this.checado = localStorage.getItem(id);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }

    return this.treinosList; 
  }

  incrementLutas(id) {
    this.lutas[id - 244].valor++;
    localStorage.setItem(this.lutas[id - 244].id, this.lutas[id - 244].valor);

    if (this.lutas[id - 244].valor === 3) {
      this.toast.create({ message: this.lutas[id - 244].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
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
            this.lutas[id - 244].valor--;
            localStorage.setItem(this.lutas[id - 244].id, this.lutas[id - 244].valor);
            this.toast.create({ message: this.lutas[id - 244].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
          }
        }
      ]
    });
    prompt.present();
  }

}