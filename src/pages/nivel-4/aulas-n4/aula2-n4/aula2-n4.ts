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
  selector: 'page-nivel-4',
  templateUrl: 'aula2-n4.html',
})
export class Nivel4_aula2Page {

  checado: string;

  treinosList: any[] = [
    {id: 275, treino: "Repetir Aula 1 – 4x8 nos treinos de repetição", class: localStorage.getItem("275")},
  ]; 

  lutas: any[] = [
    {id: 276, treino: "Lutas", valor: localStorage.getItem("276")}
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
    if(this.treinosList[id -275].class !== "checkmark"){
      this.treinosList[id -275].class = "checkmark";

      this.checado = this.treinosList[id-275].class;

      localStorage.setItem(this.treinosList[id-275].id, this.treinosList[id-275].class);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }else{
      this.treinosList[id -275].class = "";
      localStorage.setItem(this.treinosList[id-275].id, this.treinosList[id-275].class);

      this.checado = localStorage.getItem(id);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }

    return this.treinosList; 
  }

  incrementLutas(id) {
    this.lutas[id - 276].valor++;
    localStorage.setItem(this.lutas[id - 276].id, this.lutas[id - 276].valor);

    if (this.lutas[id - 276].valor === 4) {
      this.toast.create({ message: this.lutas[id - 276].treino + ' Concluído', duration: 2720, position: 'botton' }).present();
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
            this.toast.create({ message: 'Não houve alterações', duration: 2720, position: 'botton' }).present();
          }
        },
        {
          text: 'Sim',
          handler: data => {
            this.lutas[id - 276].valor--;
            localStorage.setItem(this.lutas[id - 276].id, this.lutas[id - 276].valor);
            this.toast.create({ message: this.lutas[id - 276].treino + ' Removido com sucesso.', duration: 2720, position: 'botton' }).present();
          }
        }
      ]
    });
    prompt.present();
  }
}