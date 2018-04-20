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
  selector: 'page-frente-n7',
  templateUrl: 'aula8-n7.html',
})
export class Nivel7_aula8Page {

  checado: string;

  treinosList: any[] = [
    {id: 507, treino: "Formas", class: localStorage.getItem("507")},
    {id: 508, treino: "Kan Sao boneco de madeira (estático) - 4x10", class: localStorage.getItem("508")},
    {id: 509, treino: "Tan + Fak Da / Fok Da (palma) - 4x10", class: localStorage.getItem("509")},
    {id: 510, treino: "Lai Sao / Jut Gerk na base - 4x10", class: localStorage.getItem("510")},
    {id: 511, treino: "Revisão até aula 7 - 1x5", class: localStorage.getItem("511")},
  ]; 

  lutas: any[] = [
    {id: 512, treino: "Lutas", valor: localStorage.getItem("512")}
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
    if(this.treinosList[id -507].class !== "checkmark"){
      this.treinosList[id -507].class = "checkmark";

      this.checado = this.treinosList[id-507].class;

      localStorage.setItem(this.treinosList[id-507].id, this.treinosList[id-507].class);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }else{
      this.treinosList[id -507].class = "";
      localStorage.setItem(this.treinosList[id-507].id, this.treinosList[id-507].class);

      this.checado = localStorage.getItem(id);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }

    return this.treinosList; 
  }

  incrementLutas(id) {
    this.lutas[id - 512].valor++;
    localStorage.setItem(this.lutas[id - 512].id, this.lutas[id - 512].valor);

    if (this.lutas[id - 512].valor === 7) {
      this.toast.create({ message: this.lutas[id - 512].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
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
            this.lutas[id - 512].valor--;
            localStorage.setItem(this.lutas[id - 512].id, this.lutas[id - 512].valor);
            this.toast.create({ message: this.lutas[id - 512].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
          }
        }
      ]
    });
    prompt.present();
  }

}