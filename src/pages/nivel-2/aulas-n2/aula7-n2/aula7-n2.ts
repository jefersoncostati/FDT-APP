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
  templateUrl: 'aula7-n2.html',
})
export class Nivel2_aula7Page {

  checado: string;

  treinosList: any[] = [
    {id: 122, treino: "Forma Siu Lim Tao", class: localStorage.getItem("122")},
    {id: 123, treino: "Forma pessoal Nível 1", class: localStorage.getItem("123")},
    {id: 124, treino: "Ponto Tut Sao - 2x20", class: localStorage.getItem("124")},
    {id: 125, treino: "Ponto Tut Sao/Recolhe - 2x10", class: localStorage.getItem("125")},
    {id: 126, treino: "Força deslocada a frente - 4x20", class: localStorage.getItem("126")},
    {id: 127, treino: "Revisão N2 até A7 - 1x10", class: localStorage.getItem("127")},
    {id: 128, treino: "Fluência definida - 4 treinos a escolha, 10 repetições cada", class: localStorage.getItem("128")},
    {id: 129, treino: "Fluência indefinida - 3min/1min de descanço 3 rounds", class: localStorage.getItem("129")},
    {id: 130, treino: "Luta contra vários oponentes - 3min", class: localStorage.getItem("130")},
  ]; 

  lutas: any[] = [
    {id: 131, treino: "Lutas", valor: localStorage.getItem("131")}
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
    if(this.treinosList[id -122].class !== "checkmark"){
      this.treinosList[id -122].class = "checkmark";

      this.checado = this.treinosList[id-122].class;

      localStorage.setItem(this.treinosList[id-122].id, this.treinosList[id-122].class);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }else{
      this.treinosList[id -122].class = "";
      localStorage.setItem(this.treinosList[id-122].id, this.treinosList[id-122].class);

      this.checado = localStorage.getItem(id);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }

    return this.treinosList; 
  }
  incrementLutas(id) {
    this.lutas[id - 131].valor++;
    localStorage.setItem(this.lutas[id - 131].id, this.lutas[id - 131].valor);

    if (this.lutas[id - 131].valor === 2) {
      this.toast.create({ message: this.lutas[id - 131].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
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
            this.lutas[id - 131].valor--;
            localStorage.setItem(this.lutas[id - 131].id, this.lutas[id - 131].valor);
            this.toast.create({ message: this.lutas[id - 131].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
          }
        }
      ]
    });
    prompt.present();
  }
}