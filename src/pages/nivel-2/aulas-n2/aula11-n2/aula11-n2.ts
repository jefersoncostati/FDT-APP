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
  templateUrl: 'aula11-n2.html',
})
export class Nivel2_aula11Page {

  checado: string;

  treinosList: any[] = [
    {id: 151, treino: "Forma Siu Lim Tao", class: localStorage.getItem("151")},
    {id: 152, treino: "Forma pessoal Nível 1", class: localStorage.getItem("152")},
    {id: 153, treino: "Treino Uma mão controla duas - 4x10", class: localStorage.getItem("153")},
    {id: 154, treino: "Treino Intensivo contra chutes 2min/1min de descanso - 5 rounds", class: localStorage.getItem("154")},
    {id: 155, treino: "Treino Fluencia indefinida 2min/1min de descanso - 5 rounds", class: localStorage.getItem("155")},
    {id: 156, treino: "Luta contra vários oponentes - 3min x 5 rounds", class: localStorage.getItem("156")},
    {id: 157, treino: "Luta de um toque até o final da aula", class: localStorage.getItem("157")},
  ]; 

  lutas: any[] = [
    {id: 160, treino: "Lutas", valor: localStorage.getItem("160")}
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
    if(this.treinosList[id -151].class !== "checkmark"){
      this.treinosList[id -151].class = "checkmark";

      this.checado = this.treinosList[id-151].class;

      localStorage.setItem(this.treinosList[id-151].id, this.treinosList[id-151].class);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }else{
      this.treinosList[id -151].class = "";
      localStorage.setItem(this.treinosList[id-151].id, this.treinosList[id-151].class);

      this.checado = localStorage.getItem(id);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }

    return this.treinosList; 
  }

  incrementLutas(id) {
    this.lutas[id - 160].valor++;
    localStorage.setItem(this.lutas[id - 160].id, this.lutas[id - 160].valor);

    if (this.lutas[id - 160].valor === 2) {
      this.toast.create({ message: this.lutas[id - 160].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
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
            this.lutas[id - 160].valor--;
            localStorage.setItem(this.lutas[id - 160].id, this.lutas[id - 160].valor);
            this.toast.create({ message: this.lutas[id - 160].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
          }
        }
      ]
    });
    prompt.present();
  }

}