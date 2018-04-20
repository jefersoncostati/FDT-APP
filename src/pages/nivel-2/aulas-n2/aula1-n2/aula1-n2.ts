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
  templateUrl: 'aula1-n2.html',
})
export class Nivel2_aula1Page {

  checado: string;

  treinosList: any[] = [
    {id: 64, treino: "Forma Siu Lim Tao", class: localStorage.getItem("64")},
    {id: 65, treino: "Ponto Guan Da - 4x10", class: localStorage.getItem("65")},
    {id: 66, treino: "Treino Tan Da/Guan Da por dentro - 4x10", class: localStorage.getItem("66")},
    {id: 67, treino: "Treino Tan Da/Guan Da por fora - 4x10", class: localStorage.getItem("67")},
    {id: 68, treino: "Treino Guan Sao contra chute lateral por dentro - 2x10", class: localStorage.getItem("68")},
    {id: 69, treino: "Treino Guan Sao contra chute lateral por fora - 2x10", class: localStorage.getItem("69")},
    {id: 70, treino: "Ponto Jut Sao", class: localStorage.getItem("70")},
    {id: 71, treino: "Revisão N1 Completo - 1x10", class: localStorage.getItem("71")},
    {id: 72, treino: "Luta de um toque até o final da aula - 4x10", class: localStorage.getItem("72")},
    
  ];

  lutas: any[] = [
    {id: 73, treino: "Lutas", valor: localStorage.getItem("73")}
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
    if(this.treinosList[id -64].class !== "checkmark"){
      this.treinosList[id -64].class = "checkmark";

      this.checado = this.treinosList[id-64].class;

      localStorage.setItem(this.treinosList[id-64].id, this.treinosList[id-64].class);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }else{
      this.treinosList[id -64].class = "";
      localStorage.setItem(this.treinosList[id-64].id, this.treinosList[id-64].class);

      this.checado = localStorage.getItem(id);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }

    return this.treinosList; 
  }

  incrementLutas(id) {
    this.lutas[id - 73].valor++;
    localStorage.setItem(this.lutas[id - 73].id, this.lutas[id - 73].valor);

    if (this.lutas[id - 73].valor === 2) {
      this.toast.create({ message: this.lutas[id - 73].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
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
            this.lutas[id - 73].valor--;
            localStorage.setItem(this.lutas[id - 73].id, this.lutas[id - 73].valor);
            this.toast.create({ message: this.lutas[id - 73].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
          }
        }
      ]
    });
    prompt.present();
  }

}