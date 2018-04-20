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
  templateUrl: 'aula6-n2.html',
})
export class Nivel2_aula6Page {

  checado: string;

  treinosList: any[] = [
    {id: 113, treino: "Forma Siu Lim Tao", class: localStorage.getItem("'113'")},
    {id: 114, treino: "Forma pessoal Nível 1", class: localStorage.getItem("114")},
    {id: 115, treino: "Ponto Pon/Tan Da - 4x10", class: localStorage.getItem("115")},
    {id: 116, treino: "Treino Pon/Tan Da - 4x10", class: localStorage.getItem("116")},
    {id: 117, treino: "Revisão N1 completo - 1x10", class: localStorage.getItem("117")},
    {id: 118, treino: "Revisão n2 até A5 - 2x10", class: localStorage.getItem("118")},
    {id: 119, treino: "Luta contra vários oponentes - 3min", class: localStorage.getItem("119")},
    {id: 120, treino: "Revisão N2 até A4 - 1x10", class: localStorage.getItem("120")},
  ]; 

  lutas: any[] = [
    {id: 121, treino: "Lutas", valor: localStorage.getItem("121")}
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
    if(this.treinosList[id -113].class !== "checkmark"){
      this.treinosList[id -113].class = "checkmark";

      this.checado = this.treinosList[id-113].class;

      localStorage.setItem(this.treinosList[id-113].id, this.treinosList[id-113].class);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }else{
      this.treinosList[id -113].class = "";
      localStorage.setItem(this.treinosList[id-113].id, this.treinosList[id-113].class);

      this.checado = localStorage.getItem(id);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }

    return this.treinosList; 
  }

  incrementLutas(id) {
    this.lutas[id - 121].valor++;
    localStorage.setItem(this.lutas[id - 121].id, this.lutas[id - 121].valor);

    if (this.lutas[id - 121].valor === 2) {
      this.toast.create({ message: this.lutas[id - 121].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
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
            this.lutas[id - 121].valor--;
            localStorage.setItem(this.lutas[id - 121].id, this.lutas[id - 121].valor);
            this.toast.create({ message: this.lutas[id - 121].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
          }
        }
      ]
    });
    prompt.present();
  }
}