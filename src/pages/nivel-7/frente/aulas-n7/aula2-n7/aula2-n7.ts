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
  templateUrl: 'aula2-n7.html',
})
export class Nivel7_aula2Page {

  checado: string;

  treinosList: any[] = [
    {id: 470, treino: "Formas", class: localStorage.getItem("470")},
    {id: 471, treino: "Kan Sao, Fook/Tan, Lap Da - 4x10", class: localStorage.getItem("471")},
    {id: 472, treino: "Pak Sao Girando a cintura - 4x10", class: localStorage.getItem("472")},
    {id: 473, treino: "Fook Sao transforma Fak Da, Fook Da (soco baixo) - 4x10", class: localStorage.getItem("473")},
    {id: 474, treino: "Revisão aula 1 - 3x10", class: localStorage.getItem("474")},
  ]; 

  lutas: any[] = [
    {id: 475, treino: "Lutas", valor: localStorage.getItem("475")}
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
    if(this.treinosList[id -470].class !== "checkmark"){
      this.treinosList[id -470].class = "checkmark";

      this.checado = this.treinosList[id-470].class;

      localStorage.setItem(this.treinosList[id-470].id, this.treinosList[id-470].class);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }else{
      this.treinosList[id -470].class = "";
      localStorage.setItem(this.treinosList[id-470].id, this.treinosList[id-470].class);

      this.checado = localStorage.getItem(id);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }

    return this.treinosList; 
  }

  incrementLutas(id) {
    this.lutas[id - 475].valor++;
    localStorage.setItem(this.lutas[id - 475].id, this.lutas[id - 475].valor);

    if (this.lutas[id - 475].valor === 7) {
      this.toast.create({ message: this.lutas[id - 475].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
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
            this.lutas[id - 475].valor--;
            localStorage.setItem(this.lutas[id - 475].id, this.lutas[id - 475].valor);
            this.toast.create({ message: this.lutas[id - 475].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
          }
        }
      ]
    });
    prompt.present();
  }

}