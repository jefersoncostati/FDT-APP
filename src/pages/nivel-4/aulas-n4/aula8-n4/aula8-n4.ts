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
  templateUrl: 'aula8-n4.html',
})
export class Nivel4_aula8Page {

  checado: string;

  treinosList: any[] = [
    {id: 312, treino: "Formas como na Aula 1 do Nível 4", class: localStorage.getItem("312")},
    {id: 313, treino: "Pontos e Treinos de repetição das Aulas 6 e 7 do Nível 4 – 2x10", class: localStorage.getItem("313")},
    {id: 314, treino: "Circuito Intensivo contra chutes, fluência indefinida. 3 vez", class: localStorage.getItem("314")},
    {id: 315, treino: "Chi Sao Pleno pelo resto da aula", class: localStorage.getItem("315")},
  ]; 

  lutas: any[] = [
    {id: 316, treino: "Lutas", valor: localStorage.getItem("316")}
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
    if(this.treinosList[id -312].class !== "checkmark"){
      this.treinosList[id -312].class = "checkmark";

      this.checado = this.treinosList[id-312].class;

      localStorage.setItem(this.treinosList[id-312].id, this.treinosList[id-312].class);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }else{
      this.treinosList[id -312].class = "";
      localStorage.setItem(this.treinosList[id-312].id, this.treinosList[id-312].class);

      this.checado = localStorage.getItem(id);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }

    return this.treinosList; 
  }

  incrementLutas(id) {
    this.lutas[id - 316].valor++;
    localStorage.setItem(this.lutas[id - 316].id, this.lutas[id - 316].valor);

    if (this.lutas[id - 316].valor === 4) {
      this.toast.create({ message: this.lutas[id - 316].treino + ' Concluído', duration: 2720, position: 'botton' }).present();
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
            this.lutas[id - 316].valor--;
            localStorage.setItem(this.lutas[id - 316].id, this.lutas[id - 316].valor);
            this.toast.create({ message: this.lutas[id - 316].treino + ' Removido com sucesso.', duration: 2720, position: 'botton' }).present();
          }
        }
      ]
    });
    prompt.present();
  }

}