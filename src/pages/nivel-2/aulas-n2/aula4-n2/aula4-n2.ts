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
  templateUrl: 'aula4-n2.html',
})
export class Nivel2_aula4Page {

  checado: string;

  treinosList: any[] = [
    {id: 94, treino: "Forma Siu Lim Tao", class: localStorage.getItem("94")},
    {id: 95, treino: "Forma pessoal do Nível 1", class: localStorage.getItem("95")},
    {id: 96, treino: "Revisão N2 A1 - 1x10", class: localStorage.getItem("96")},
    {id: 97, treino: "Revisão N2 A2 - 2x10", class: localStorage.getItem("97")},
    {id: 98, treino: "Revisão N2 A3 - 3x10", class: localStorage.getItem("98")},
    {id: 99, treino: "Luta de um toque pelo resto da aula", class: localStorage.getItem("99")},
    {id: 100, treino: "Treino Pak, Tan Da - 4x10", class: localStorage.getItem("100")},
  ]; 

  lutas: any[] = [
    {id: 101, treino: "Lutas", valor: localStorage.getItem("101")}
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
    if(this.treinosList[id -94].class !== "checkmark"){
      this.treinosList[id -94].class = "checkmark";

      this.checado = this.treinosList[id-94].class;

      localStorage.setItem(this.treinosList[id-94].id, this.treinosList[id-94].class);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }else{
      this.treinosList[id -94].class = "";
      localStorage.setItem(this.treinosList[id-94].id, this.treinosList[id-94].class);

      this.checado = localStorage.getItem(id);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }

    return this.treinosList; 
  }

  incrementLutas(id) {
    this.lutas[id - 101].valor++;
    localStorage.setItem(this.lutas[id - 101].id, this.lutas[id - 101].valor);

    if (this.lutas[id - 101].valor === 2) {
      this.toast.create({ message: this.lutas[id - 101].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
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
            this.lutas[id - 101].valor--;
            localStorage.setItem(this.lutas[id - 101].id, this.lutas[id - 101].valor);
            this.toast.create({ message: this.lutas[id - 101].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
          }
        }
      ]
    });
    prompt.present();
  }
}