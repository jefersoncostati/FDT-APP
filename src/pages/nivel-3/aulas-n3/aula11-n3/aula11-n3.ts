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
  templateUrl: 'aula11-n3.html',
})
export class Nivel3_aula11Page {

  checado: string;

  treinosList: any[] = [
    {id: 253, treino: "Formas (as três) conforme expostas na Aula 1 do Nivel 3", class: localStorage.getItem("253")},
    {id: 254, treino: "Revisão de todos os Pontos e Treinos de repetição do Nível 3 até agora - 1x10", class: localStorage.getItem("254")},
    {id: 255, treino: "Revisão extra das aulas 8 e 9 do Nível 3 – 1x20", class: localStorage.getItem("255")},
    {id: 256, treino: "Treino de Chi Sao livre – 3x3min / 1 de descanso", class: localStorage.getItem("256")},
    {id: 257, treino: "Forma – Refinar, aperfeiçoar, acrescentar e/ou retirar movimentos da forma pessoal de forma que ela resuma com perfeição tudo visto até agora, adaptado ao seu uso e estilo pessoais", class: localStorage.getItem("257")},
  ]; 

  lutas: any[] = [
    {id: 258, treino: "Lutas", valor: localStorage.getItem("258")}
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
    if(this.treinosList[id -253].class !== "checkmark"){
      this.treinosList[id -253].class = "checkmark";

      this.checado = this.treinosList[id-253].class;

      localStorage.setItem(this.treinosList[id-253].id, this.treinosList[id-253].class);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }else{
      this.treinosList[id -253].class = "";
      localStorage.setItem(this.treinosList[id-253].id, this.treinosList[id-253].class);

      this.checado = localStorage.getItem(id);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }

    return this.treinosList; 
  }

  incrementLutas(id) {
    this.lutas[id - 258].valor++;
    localStorage.setItem(this.lutas[id - 258].id, this.lutas[id - 258].valor);

    if (this.lutas[id - 258].valor === 3) {
      this.toast.create({ message: this.lutas[id - 258].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
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
            this.lutas[id - 258].valor--;
            localStorage.setItem(this.lutas[id - 258].id, this.lutas[id - 258].valor);
            this.toast.create({ message: this.lutas[id - 258].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
          }
        }
      ]
    });
    prompt.present();
  }

}