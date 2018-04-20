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
  templateUrl: 'aula1-n7.html',
})
export class Nivel7_aula1Page {

  checado: string;

  treinosList: any[] = [
    {id: 465, treino: "Formas", class: localStorage.getItem("465")},
    {id: 466, treino: "Wu Sao / Lap Da (palma) - 4x10", class: localStorage.getItem("466")},
    {id: 467, treino: "Pon Sao / Tan Da (palma baixa) - 4x10", class: localStorage.getItem("467")},
    {id: 468, treino: "Kan Sao + Passo / Kan Sao Invertido + Passo - 4x10", class: localStorage.getItem("468")},
  ]; 

  lutas: any[] = [
    {id: 469, treino: "Lutas", valor: localStorage.getItem("469")}
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
    if(this.treinosList[id -465].class !== "checkmark"){
      this.treinosList[id -465].class = "checkmark";

      this.checado = this.treinosList[id-465].class;

      localStorage.setItem(this.treinosList[id-465].id, this.treinosList[id-465].class);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }else{
      this.treinosList[id -465].class = "";
      localStorage.setItem(this.treinosList[id-465].id, this.treinosList[id-465].class);

      this.checado = localStorage.getItem(id);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }

    return this.treinosList; 
  }

  incrementLutas(id) {
    this.lutas[id - 469].valor++;
    localStorage.setItem(this.lutas[id - 469].id, this.lutas[id - 469].valor);

    if (this.lutas[id - 469].valor === 7) {
      this.toast.create({ message: this.lutas[id - 469].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
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
            this.lutas[id - 469].valor--;
            localStorage.setItem(this.lutas[id - 469].id, this.lutas[id - 469].valor);
            this.toast.create({ message: this.lutas[id - 469].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
          }
        }
      ]
    });
    prompt.present();
  }

}