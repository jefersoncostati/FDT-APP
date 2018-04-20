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
  templateUrl: 'aula6-n3.html',
})
export class Nivel3_aula6Page {

  checado: string;

  treinosList: any[] = [
    {id: 211, treino: "Forma as três conforme exporstas na Aula 1 Nível 3", class: localStorage.getItem("211")},
    {id: 212, treino: "Revisão N3 A3 - 1x10", class: localStorage.getItem("212")},
    {id: 213, treino: "Ponto Tan/Fook - 2x10", class: localStorage.getItem("213")},
    {id: 214, treino: "Treino Tan Chi Sao 1, 2 e 3 - 1x20 cada", class: localStorage.getItem("214")},
    {id: 215, treino: "Treino Seung Chi Sao sem ataques ou passos - 3x3 com 1min de descanço", class: localStorage.getItem("215")},
    {id: 216, treino: "Treino Seung Chi Sao só com passos - 3x3 com 1min de descanço", class: localStorage.getItem("216")},
    {id: 217, treino: "Treino Chi Sao livre - até o final da aula", class: localStorage.getItem("217")},
  ]; 

  lutas: any[] = [
    {id: 218, treino: "Lutas", valor: localStorage.getItem("218")}
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
    if(this.treinosList[id -211].class !== "checkmark"){
      this.treinosList[id -211].class = "checkmark";

      this.checado = this.treinosList[id-211].class;

      localStorage.setItem(this.treinosList[id-211].id, this.treinosList[id-211].class);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }else{
      this.treinosList[id -211].class = "";
      localStorage.setItem(this.treinosList[id-211].id, this.treinosList[id-211].class);

      this.checado = localStorage.getItem(id);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }

    return this.treinosList; 
  }

  incrementLutas(id) {
    this.lutas[id - 218].valor++;
    localStorage.setItem(this.lutas[id - 218].id, this.lutas[id - 218].valor);

    if (this.lutas[id - 218].valor === 3) {
      this.toast.create({ message: this.lutas[id - 218].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
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
            this.lutas[id - 218].valor--;
            localStorage.setItem(this.lutas[id - 218].id, this.lutas[id - 218].valor);
            this.toast.create({ message: this.lutas[id - 218].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
          }
        }
      ]
    });
    prompt.present();
  }

}