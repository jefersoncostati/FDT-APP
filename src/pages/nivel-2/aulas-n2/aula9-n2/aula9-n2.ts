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
  templateUrl: 'aula9-n2.html',
})
export class Nivel2_aula9Page {

  checado: string;

  treinosList: any[] = [
    {id: 139, treino: "Forma Siu Lim Tao", class: localStorage.getItem("139")},
    {id: 140, treino: "Forma pessoal N1", class: localStorage.getItem("140")},
    {id: 141, treino: "Revisão N2 até A8 - 1x10", class: localStorage.getItem("141")},
    {id: 142, treino: "Treino Fluência definida - 4 treinos a escolha, 10 repetições cada", class: localStorage.getItem("142")},
    {id: 143, treino: "Treino Fluência indefinida 3min/1min de descanso - 3 rounds", class: localStorage.getItem("143")},
    {id: 144, treino: "Luta contra vários oponentes - 3min", class: localStorage.getItem("144")},
  ]; 

  lutas: any[] = [
    {id: 145, treino: "Lutas", valor: localStorage.getItem("145")}
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
    if(this.treinosList[id -139].class !== "checkmark"){
      this.treinosList[id -139].class = "checkmark";

      this.checado = this.treinosList[id-139].class;

      localStorage.setItem(this.treinosList[id-139].id, this.treinosList[id-139].class);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }else{
      this.treinosList[id -139].class = "";
      localStorage.setItem(this.treinosList[id-139].id, this.treinosList[id-139].class);

      this.checado = localStorage.getItem(id);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }

    return this.treinosList; 
  }
  incrementLutas(id) {
    this.lutas[id - 145].valor++;
    localStorage.setItem(this.lutas[id - 145].id, this.lutas[id - 145].valor);

    if (this.lutas[id - 145].valor === 2) {
      this.toast.create({ message: this.lutas[id - 145].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
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
            this.lutas[id - 145].valor--;
            localStorage.setItem(this.lutas[id - 145].id, this.lutas[id - 145].valor);
            this.toast.create({ message: this.lutas[id - 145].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
          }
        }
      ]
    });
    prompt.present();
  }

}