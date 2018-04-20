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
  templateUrl: 'aula3-n3.html',
})
export class Nivel3_aula3Page {

  checado: string;

  treinosList: any[] = [
    {id: 185, treino: "Formas (as três) conforme expostas na Aula 1 do Nível 3", class: localStorage.getItem("185")},
    {id: 186, treino: "Revisão N3 A1 - 2x10", class: localStorage.getItem("186")},
    {id: 187, treino: "Ponto Biu Sao/Agarra pescoço/Cotovelada  - 4x10", class: localStorage.getItem("187")},
    {id: 188, treino: "Treino Agarra pescoço/Cotovelada contra defesa por fora - 4x10", class: localStorage.getItem("188")},
    {id: 189, treino: "Treino Agarra pescoço/Cotovelada contra defesa por dentro - 4x10", class: localStorage.getItem("189")},
    {id: 190, treino: "Ponto Pai jang (Cotovelo horizontal) - 4x10", class: localStorage.getItem("190")},
    {id: 191, treino: "Ponto Lan Sao com passo/Retornar para base - 4x10", class: localStorage.getItem("191")},
    {id: 192, treino: "Treino Lan Da - 4x10", class: localStorage.getItem("192")},
    {id: 193, treino: "Ponto Lan Sao com cintura - 4x10", class: localStorage.getItem("193")},
  ]; 

  lutas: any[] = [
    {id: 194, treino: "Lutas", valor: localStorage.getItem("194")}
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
    if(this.treinosList[id - 185].class !== "checkmark"){
      this.treinosList[id - 185].class = "checkmark";

      this.checado = this.treinosList[id- 185].class;

      localStorage.setItem(this.treinosList[id- 185].id, this.treinosList[id- 185].class);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }else{
      this.treinosList[id - 185].class = "";
      localStorage.setItem(this.treinosList[id- 185].id, this.treinosList[id- 185].class);

      this.checado = localStorage.getItem(id);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }

    return this.treinosList; 
  }

  incrementLutas(id) {
    this.lutas[id - 194].valor++;
    localStorage.setItem(this.lutas[id - 194].id, this.lutas[id - 194].valor);

    if (this.lutas[id - 194].valor === 3) {
      this.toast.create({ message: this.lutas[id - 194].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
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
            this.lutas[id - 194].valor--;
            localStorage.setItem(this.lutas[id - 194].id, this.lutas[id - 194].valor);
            this.toast.create({ message: this.lutas[id - 194].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
          }
        }
      ]
    });
    prompt.present();
  }

}