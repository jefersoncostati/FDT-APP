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
  templateUrl: 'aula3-n2.html',
})
export class Nivel2_aula3Page {

  checado: string;

  treinosList: any[] = [
    {id: 84, treino: "Forma Siu Lim Tao", class: localStorage.getItem("84")},
    {id: 85, treino: "Ponto Biu Sao/Jut Sao - 4x10", class: localStorage.getItem("85")},
    {id: 86, treino: "Treino Biu Sao/Lap Da  - 4x10", class: localStorage.getItem("86")},
    {id: 87, treino: "Ponto Ding Sao/Palma - 4x10", class: localStorage.getItem("87")},
    {id: 88, treino: "Treino Ding Sao/Palma - 4x10", class: localStorage.getItem("88")},
    {id: 89, treino: "Revisão N2 A1 - 2x10", class: localStorage.getItem("89")},
    {id: 90, treino: "Revisão N2 A2 - 3x10", class: localStorage.getItem("90")},
    {id: 91, treino: "Revisão N1 - 1x5", class: localStorage.getItem("91")},
    {id: 92, treino: "Forma desenvolver a forma pessoal do nível 1", class: localStorage.getItem("92")},
  ]; 

  lutas: any[] = [
    {id: 93, treino: "Lutas", valor: localStorage.getItem("93")}
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
    if(this.treinosList[id -84].class !== "checkmark"){
      this.treinosList[id -84].class = "checkmark";

      this.checado = this.treinosList[id-84].class;

      localStorage.setItem(this.treinosList[id-84].id, this.treinosList[id-84].class);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }else{
      this.treinosList[id -84].class = "";
      localStorage.setItem(this.treinosList[id-84].id, this.treinosList[id-84].class);

      this.checado = localStorage.getItem(id);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }

    return this.treinosList; 
  }

  incrementLutas(id) {
    this.lutas[id - 93].valor++;
    localStorage.setItem(this.lutas[id - 93].id, this.lutas[id - 93].valor);

    if (this.lutas[id - 93].valor === 2) {
      this.toast.create({ message: this.lutas[id - 93].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
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
            this.lutas[id - 93].valor--;
            localStorage.setItem(this.lutas[id - 93].id, this.lutas[id - 93].valor);
            this.toast.create({ message: this.lutas[id - 93].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
          }
        }
      ]
    });
    prompt.present();
  }

}