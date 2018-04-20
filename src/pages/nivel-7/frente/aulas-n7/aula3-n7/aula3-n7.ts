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
  templateUrl: 'aula3-n7.html',
})
export class Nivel7_aula3Page {

  checado: string;

  treinosList: any[] = [
    {id: 476, treino: "Formas", class: localStorage.getItem("476")},
    {id: 477, treino: "Took Sao / Jut Sao - 4x10", class: localStorage.getItem("477")},
    {id: 478, treino: "Guan Sao invertido (toque baixo) - 4x10", class: localStorage.getItem("478")},
    {id: 479, treino: "Pak / Fak Da na costela - 4x10", class: localStorage.getItem("479")},
    {id: 480, treino: "Huen Sao interno / Palma Baixa", class: localStorage.getItem("480")},
    {id: 481, treino: "Revisão aula 1 - 2x10", class: localStorage.getItem("481")},
    {id: 482, treino: "Revisao aula 2 - 3x10", class: localStorage.getItem("482")},
  ]; 

  lutas: any[] = [
    {id: 483, treino: "Lutas", valor: localStorage.getItem("483")}
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
    if(this.treinosList[id -476].class !== "checkmark"){
      this.treinosList[id -476].class = "checkmark";

      this.checado = this.treinosList[id-476].class;

      localStorage.setItem(this.treinosList[id-476].id, this.treinosList[id-476].class);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }else{
      this.treinosList[id -476].class = "";
      localStorage.setItem(this.treinosList[id-476].id, this.treinosList[id-476].class);

      this.checado = localStorage.getItem(id);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }

    return this.treinosList; 
  }

  incrementLutas(id) {
    this.lutas[id - 483].valor++;
    localStorage.setItem(this.lutas[id - 483].id, this.lutas[id - 483].valor);

    if (this.lutas[id - 483].valor === 7) {
      this.toast.create({ message: this.lutas[id - 483].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
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
            this.lutas[id - 483].valor--;
            localStorage.setItem(this.lutas[id - 483].id, this.lutas[id - 483].valor);
            this.toast.create({ message: this.lutas[id - 483].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
          }
        }
      ]
    });
    prompt.present();
  }

}