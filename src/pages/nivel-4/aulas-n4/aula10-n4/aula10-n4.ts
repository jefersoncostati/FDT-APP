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
  selector: 'page-nivel-4',
  templateUrl: 'aula10-n4.html',
})
export class Nivel4_aula10Page {

  checado: string;

  treinosList: any[] = [
    {id: 322, treino: "Formas como na Aula 1 do Nível 4", class: localStorage.getItem("322")},
    {id: 323, treino: "Fluência Indefinida – 3 rounds de 3 minutos", class: localStorage.getItem("323")},
    {id: 324, treino: "Intensivo contra chutes – 3 rounds de 3 minutos", class: localStorage.getItem("324")},
    {id: 325, treino: "Luta (quantos oponentes quiser) – 3 rounds de 3 minutos", class: localStorage.getItem("325")},
    {id: 326, treino: "Chi Sao c/ Faca – 3 rounds de 3 minutos", class: localStorage.getItem("326")},
    {id: 327, treino: "Chi Sao Pleno – 3 rounds de 3 minutos", class: localStorage.getItem("327")},
  ]; 

  lutas: any[] = [
    {id: 328, treino: "Lutas", valor: localStorage.getItem("328")}
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
    if(this.treinosList[id -322].class !== "checkmark"){
      this.treinosList[id -322].class = "checkmark";

      this.checado = this.treinosList[id-322].class;

      localStorage.setItem(this.treinosList[id-322].id, this.treinosList[id-322].class);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }else{
      this.treinosList[id -322].class = "";
      localStorage.setItem(this.treinosList[id-322].id, this.treinosList[id-322].class);

      this.checado = localStorage.getItem(id);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }

    return this.treinosList; 
  }

  incrementLutas(id) {
    this.lutas[id - 328].valor++;
    localStorage.setItem(this.lutas[id - 328].id, this.lutas[id - 328].valor);

    if (this.lutas[id - 328].valor === 4) {
      this.toast.create({ message: this.lutas[id - 328].treino + ' Concluído', duration: 2720, position: 'botton' }).present();
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
            this.toast.create({ message: 'Não houve alterações', duration: 2720, position: 'botton' }).present();
          }
        },
        {
          text: 'Sim',
          handler: data => {
            this.lutas[id - 328].valor--;
            localStorage.setItem(this.lutas[id - 328].id, this.lutas[id - 328].valor);
            this.toast.create({ message: this.lutas[id - 328].treino + ' Removido com sucesso.', duration: 2720, position: 'botton' }).present();
          }
        }
      ]
    });
    prompt.present();
  }

}