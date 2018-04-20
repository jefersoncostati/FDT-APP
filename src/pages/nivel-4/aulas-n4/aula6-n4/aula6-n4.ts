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
  templateUrl: 'aula6-n4.html',
})
export class Nivel4_aula6Page {

  checado: string;

  treinosList: any[] = [
    {id: 291, treino: "Formas como na Aula 1 do Nível 4", class: localStorage.getItem("291")},
    {id: 292, treino: "Ponto Sei Dim Gerk + Lian Kuen – 4x10", class: localStorage.getItem("292")},
    {id: 293, treino: "Ponto Kan Sao, Chaap Kuen – 4x10", class: localStorage.getItem("293")},
    {id: 294, treino: "Ponto Fak Sao, Jut Sao, Biu Sao – 4x10", class: localStorage.getItem("294")},
    {id: 295, treino: "Ponto Dai Pon Sao - 4x10", class: localStorage.getItem("295")},
    {id: 296, treino: "Treino Dai Pon Sao + Fluência contra soco baixo– 4x10", class: localStorage.getItem("296")},
    {id: 297, treino: "Ponto Man Sao 3 Ataques – 4x10", class: localStorage.getItem("297")},
    {id: 298, treino: "Treino Man Sao + Fluência contra ataques curvos na face – 4x10", class: localStorage.getItem("298")},
    {id: 299, treino: "Circuito Intensivo contra chutes, fluência indefinida. 3 vez", class: localStorage.getItem("299")},
    {id: 300, treino: "Chi Gerk - 3 rounds de 3 minutos. 1 min de descanso", class: localStorage.getItem("300")},
  ]; 

  lutas: any[] = [
    {id: 301, treino: "Lutas", valor: localStorage.getItem("301")}
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
    if(this.treinosList[id -291].class !== "checkmark"){
      this.treinosList[id -291].class = "checkmark";

      this.checado = this.treinosList[id-291].class;

      localStorage.setItem(this.treinosList[id-291].id, this.treinosList[id-291].class);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }else{
      this.treinosList[id -291].class = "";
      localStorage.setItem(this.treinosList[id-291].id, this.treinosList[id-291].class);

      this.checado = localStorage.getItem(id);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }

    return this.treinosList; 
  }

  incrementLutas(id) {
    this.lutas[id - 301].valor++;
    localStorage.setItem(this.lutas[id - 301].id, this.lutas[id - 301].valor);

    if (this.lutas[id - 301].valor === 4) {
      this.toast.create({ message: this.lutas[id - 301].treino + ' Concluído', duration: 2720, position: 'botton' }).present();
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
            this.lutas[id - 301].valor--;
            localStorage.setItem(this.lutas[id - 301].id, this.lutas[id - 301].valor);
            this.toast.create({ message: this.lutas[id - 301].treino + ' Removido com sucesso.', duration: 2720, position: 'botton' }).present();
          }
        }
      ]
    });
    prompt.present();
  }
}