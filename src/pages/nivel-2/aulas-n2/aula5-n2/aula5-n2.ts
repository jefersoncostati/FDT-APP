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
  selector: 'page-nivel-2',
  templateUrl: 'aula5-n2.html',
})
export class Nivel2_aula5Page {

  checado: string;

  treinosList: any[] = [
    {id: 102, treino: "Forma Siu Lim Tao", class: localStorage.getItem("102")},
    {id: 103, treino: "Forma pessoal do Nível 1", class: localStorage.getItem("103")},
    {id: 104, treino: "Ponto Pak / ko Chang - 4x10", class: localStorage.getItem("104")},
    {id: 105, treino: "Treino Pak / Ko Chang - 4x10", class: localStorage.getItem("105")},
    {id: 106, treino: "Tan / Guan - 4x10", class: localStorage.getItem("106")},
    {id: 107, treino: "Tan / Guan - 4x10", class: localStorage.getItem("107")},
    {id: 108, treino: "Fluência definida - 4 treinos a escolha, 10 repetições cada", class: localStorage.getItem("108")},
    {id: 109, treino: "Fluência indefinida - 3min/1min de descanço 3 rounds", class: localStorage.getItem("109")},
    {id: 110, treino: "Luta contra vários oponentes - 3min", class: localStorage.getItem("110")},
    {id: 111, treino: "Revisão N2 até A4 - 1x10", class: localStorage.getItem("111")},
  ]; 

  lutas: any[] = [
    {id: 112, treino: "Lutas", valor: localStorage.getItem("112")}
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
    if(this.treinosList[id -102].class !== "checkmark"){
      this.treinosList[id -102].class = "checkmark";

      this.checado = this.treinosList[id-102].class;

      localStorage.setItem(this.treinosList[id-102].id, this.treinosList[id-102].class);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }else{
      this.treinosList[id -102].class = "";
      localStorage.setItem(this.treinosList[id-102].id, this.treinosList[id-102].class);

      this.checado = localStorage.getItem(id);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }

    return this.treinosList; 
  }

  incrementLutas(id) {
    this.lutas[id - 112].valor++;
    localStorage.setItem(this.lutas[id - 112].id, this.lutas[id - 112].valor);

    if (this.lutas[id - 112].valor === 2) {
      this.toast.create({ message: this.lutas[id - 112].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
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
            this.lutas[id - 112].valor--;
            localStorage.setItem(this.lutas[id - 112].id, this.lutas[id - 112].valor);
            this.toast.create({ message: this.lutas[id - 112].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
          }
        }
      ]
    });
    prompt.present();
  }

}