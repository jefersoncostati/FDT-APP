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
  selector: 'page-nivel-2',
  templateUrl: 'aula8-n2.html',
})
export class Nivel2_aula8Page {

  checado: string;

  treinosList: any[] = [
    {id: 132, treino: "Forma Siu Lim Tao", class: localStorage.getItem("132")},
    {id: 133, treino: "Forma pessoal Nível 1", class: localStorage.getItem("133")},
    {id: 134, treino: "Treino intensivo contra chutes 3min/1min de descanso - 3 rounds", class: localStorage.getItem("134")},
    {id: 135, treino: "Revisão N1 complento - 1x5", class: localStorage.getItem("135")},
    {id: 136, treino: "Revisão N2 até A7 - 1x10", class: localStorage.getItem("136")},
    {id: 137, treino: "Luta de um toque pelo resto da aula", class: localStorage.getItem("137")},
  ]; 

  lutas: any[] = [
    {id: 138, treino: "Lutas", valor: localStorage.getItem("138")}
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
    if(this.treinosList[id -132].class !== "checkmark"){
      this.treinosList[id -132].class = "checkmark";

      this.checado = this.treinosList[id-132].class;

      localStorage.setItem(this.treinosList[id-132].id, this.treinosList[id-132].class);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }else{
      this.treinosList[id -132].class = "";
      localStorage.setItem(this.treinosList[id-132].id, this.treinosList[id-132].class);

      this.checado = localStorage.getItem(id);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }

    return this.treinosList; 
  }

  incrementLutas(id) {
    this.lutas[id - 138].valor++;
    localStorage.setItem(this.lutas[id - 138].id, this.lutas[id - 138].valor);

    if (this.lutas[id - 138].valor === 2) {
      this.toast.create({ message: this.lutas[id - 138].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
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
            this.lutas[id - 138].valor--;
            localStorage.setItem(this.lutas[id - 138].id, this.lutas[id - 138].valor);
            this.toast.create({ message: this.lutas[id - 138].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
          }
        }
      ]
    });
    prompt.present();
  }

}