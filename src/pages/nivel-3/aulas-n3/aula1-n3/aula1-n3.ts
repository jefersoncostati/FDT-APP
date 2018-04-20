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
  templateUrl: 'aula1-n3.html',
})
export class Nivel3_aula1Page {

  checado: string;

  treinosList: any[] = [
    {id: 166, treino: "Forma Siu Lim Tao - Uma repetição normal e uma com cada perna", class: localStorage.getItem("166")},
    {id: 167, treino: "Forma Pessoal -  agregar movimentos novos relativos ao nível 2 se necessário", class: localStorage.getItem("167")},
    {id: 168, treino: "Forma Chum Kiu - primeira parte", class: localStorage.getItem("168")},
    {id: 169, treino: "Ponto Relaxa/Recolhe - Método Chum Kiu - 4x10", class: localStorage.getItem("169")},
    {id: 170, treino: "Ponto Ngoi Faan sao (Defesa chicote) - 4x10", class: localStorage.getItem("170")},
    {id: 171, treino: "Treino Ngoi Faan Da (Defesa chicote) + sequência - 4x10", class: localStorage.getItem("171")},
    {id: 172, treino: "Ponto Soco/Tan Sao - 4x10", class: localStorage.getItem("172")},
    {id: 173, treino: "Treino Soco/Tan Sao - 4x10", class: localStorage.getItem("173")},
    {id: 174, treino: "Treino Soco/Huen Sao contra Tan Sao - 4x10", class: localStorage.getItem("174")},
    {id: 175, treino: "Ponto Tan/Fon Ngan Kuen - 4x10", class: localStorage.getItem("175")},
    {id: 176, treino: "Treino Tan/Fon Ngan Kuen - 4x10", class: localStorage.getItem("176")},
  ]; 

  lutas: any[] = [
    {id: 177, treino: "Lutas", valor: localStorage.getItem("177")}
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
    if(this.treinosList[id -166].class !== "checkmark"){
      this.treinosList[id -166].class = "checkmark";

      this.checado = this.treinosList[id-166].class;

      localStorage.setItem(this.treinosList[id-166].id, this.treinosList[id-166].class);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }else{
      this.treinosList[id -166].class = "";
      localStorage.setItem(this.treinosList[id-166].id, this.treinosList[id-166].class);

      this.checado = localStorage.getItem(id);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }

    return this.treinosList; 
  }

  incrementLutas(id) {
    this.lutas[id - 177].valor++;
    localStorage.setItem(this.lutas[id - 177].id, this.lutas[id - 177].valor);

    if (this.lutas[id - 177].valor === 3) {
      this.toast.create({ message: this.lutas[id - 177].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
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
            this.lutas[id - 177].valor--;
            localStorage.setItem(this.lutas[id - 177].id, this.lutas[id - 177].valor);
            this.toast.create({ message: this.lutas[id - 177].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
          }
        }
      ]
    });
    prompt.present();
  }

}