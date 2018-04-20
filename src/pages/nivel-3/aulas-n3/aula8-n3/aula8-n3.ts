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
  templateUrl: 'aula8-n3.html',
})
export class Nivel3_aula8Page {

  checado: string;

  treinosList: any[] = [
    {id: 226, treino: "Formas (as três) conforme expostas na Aula 1 do Nivel 3", class: localStorage.getItem("226")},
    {id: 227, treino: "Revisão de todos os Pontos e Treinos de repetição do Nível 3 até agora - 2x10", class: localStorage.getItem("227")},
    {id: 228, treino: "Treino Lap Sao de Pon Sao - 4x10", class: localStorage.getItem("228")},
    {id: 229, treino: "Treino Lap Sao de Tan Sao – 4x10", class: localStorage.getItem("229")},
    {id: 230, treino: "Treino Lap Sao de Wu Sao – 4x10", class: localStorage.getItem("230")},
    {id: 231, treino: "Treino de fluência indefinido – 3x3min / 1 de descanso", class: localStorage.getItem("231")},
    {id: 232, treino: "Treino intensivo contra chutes – 3x3min / 1 de descanso", class: localStorage.getItem("232")},
    {id: 233, treino: "Luta contra vários oponentes  – 3x3min / 1 de descanso", class: localStorage.getItem("233")},
    {id: 234, treino: "Treino Chi Sao livre pelo resto da aula se a aula 8 couber em uma aula só", class: localStorage.getItem("234")},
  ]; 

  lutas: any[] = [
    {id: 235, treino: "Lutas", valor: localStorage.getItem("235")}
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
    if(this.treinosList[id -226].class !== "checkmark"){
      this.treinosList[id -226].class = "checkmark";

      this.checado = this.treinosList[id-226].class;

      localStorage.setItem(this.treinosList[id-226].id, this.treinosList[id-226].class);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }else{
      this.treinosList[id -226].class = "";
      localStorage.setItem(this.treinosList[id-226].id, this.treinosList[id-226].class);

      this.checado = localStorage.getItem(id);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }

    return this.treinosList; 
  }

  incrementLutas(id) {
    this.lutas[id - 235].valor++;
    localStorage.setItem(this.lutas[id - 235].id, this.lutas[id - 235].valor);

    if (this.lutas[id - 235].valor === 3) {
      this.toast.create({ message: this.lutas[id - 235].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
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
            this.lutas[id - 235].valor--;
            localStorage.setItem(this.lutas[id - 235].id, this.lutas[id - 235].valor);
            this.toast.create({ message: this.lutas[id - 235].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
          }
        }
      ]
    });
    prompt.present();
  }

}