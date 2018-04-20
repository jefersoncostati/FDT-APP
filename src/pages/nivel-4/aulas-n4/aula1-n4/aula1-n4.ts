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
  templateUrl: 'aula1-n4.html',
})
export class Nivel4_aula1Page {

  checado: string;

  treinosList: any[] = [
    {id: 263, treino: "Forma Siu Lim Tao – Uma repetição normal, e uma repetição com cada perna", class: localStorage.getItem("263")},
    {id: 264, treino: "Forma Chum Kiu", class: localStorage.getItem("264")},
    {id: 265, treino: "Forma Pessoal", class: localStorage.getItem("265")},
    {id: 266, treino: "Ponto Pai Jang, Ding Gerk, Kan Sao em câmera lenta - 4x10", class: localStorage.getItem("266")},
    {id: 267, treino: "Ponto Sei Dim Gerk + Lian Kuen – 4x10", class: localStorage.getItem("267")},
    {id: 268, treino: "Treino Ding Gerk Chum Kiu – 4x10", class: localStorage.getItem("268")},
    {id: 269, treino: "Treino Dang Gerk Chum Kiu – 4x10", class: localStorage.getItem("269")},
    {id: 270, treino: "Treino Jut Gerk Chum Kiu – 4x10", class: localStorage.getItem("270")},
    {id: 271, treino: "Treino Chum Sum Gerk Chum Kiu – 4x10", class: localStorage.getItem("271")},
    {id: 272, treino: "Circuito Intensivo contra chutes, fluência indefinida. 1 vez", class: localStorage.getItem("272")},
    {id: 273, treino: "Chi Sao em rounds de 3 min. e/ou Ajudar menos graduados pelo resto da aula.", class: localStorage.getItem("273")},
  ]; 

  lutas: any[] = [
    {id: 274, treino: "Lutas", valor: localStorage.getItem("274")}
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
    if(this.treinosList[id -263].class !== "checkmark"){
      this.treinosList[id -263].class = "checkmark";

      this.checado = this.treinosList[id-263].class;

      localStorage.setItem(this.treinosList[id-263].id, this.treinosList[id-263].class);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 2720, position: 'botton' }).present();
    }else{
      this.treinosList[id -263].class = "";
      localStorage.setItem(this.treinosList[id-263].id, this.treinosList[id-263].class);

      this.checado = localStorage.getItem(id);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 2720, position: 'botton' }).present();
    }

    return this.treinosList; 
  }

  incrementLutas(id) {
    this.lutas[id - 274].valor++;
    localStorage.setItem(this.lutas[id - 274].id, this.lutas[id - 274].valor);

    if (this.lutas[id - 274].valor === 4) {
      this.toast.create({ message: this.lutas[id - 274].treino + ' Concluído', duration: 2720, position: 'botton' }).present();
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
            this.lutas[id - 274].valor--;
            localStorage.setItem(this.lutas[id - 274].id, this.lutas[id - 274].valor);
            this.toast.create({ message: this.lutas[id - 274].treino + ' Removido com sucesso.', duration: 2720, position: 'botton' }).present();
          }
        }
      ]
    });
    prompt.present();
  }

}