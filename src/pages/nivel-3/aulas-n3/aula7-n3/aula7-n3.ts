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
  templateUrl: 'aula7-n3.html',
})
export class Nivel3_aula7Page {

  checado: string;

  treinosList: any[] = [
    {id: 219, treino: "Formas (as três) conforme expostas na Aula 1 do Nivel 3", class: localStorage.getItem("219")},
    {id: 220, treino: "Revisão do Nível 1, 2 e 3, Pontos e Treinos de repetição – 1x5", class: localStorage.getItem("220")},
    {id: 221, treino: "Luta de um toque 3 lutas com no mínimo 3min/1min de descanso.", class: localStorage.getItem("221")},
    {id: 222, treino: "Treino Intensivo contra chutes – 3x3min/1min descanso", class: localStorage.getItem("222")},
    {id: 223, treino: "Treino Tan Chi Sao livre - 3x3min/1min descanso", class: localStorage.getItem("223")},
    {id: 224, treino: "Treino Seung Chi Sao livre - 3x3min/1min descanso", class: localStorage.getItem("224")},
  ]; 

  lutas: any[] = [
    {id: 225, treino: "Lutas", valor: localStorage.getItem("225")}
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
    if(this.treinosList[id -219].class !== "checkmark"){
      this.treinosList[id -219].class = "checkmark";

      this.checado = this.treinosList[id-219].class;

      localStorage.setItem(this.treinosList[id-219].id, this.treinosList[id-219].class);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }else{
      this.treinosList[id -219].class = "";
      localStorage.setItem(this.treinosList[id-219].id, this.treinosList[id-219].class);

      this.checado = localStorage.getItem(id);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }

    return this.treinosList; 
  }

  incrementLutas(id) {
    this.lutas[id - 225].valor++;
    localStorage.setItem(this.lutas[id - 225].id, this.lutas[id - 225].valor);

    if (this.lutas[id - 225].valor === 3) {
      this.toast.create({ message: this.lutas[id - 225].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
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
            this.lutas[id - 225].valor--;
            localStorage.setItem(this.lutas[id - 225].id, this.lutas[id - 225].valor);
            this.toast.create({ message: this.lutas[id - 225].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
          }
        }
      ]
    });
    prompt.present();
  }

}