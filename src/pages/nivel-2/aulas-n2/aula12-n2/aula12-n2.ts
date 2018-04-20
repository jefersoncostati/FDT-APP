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
  templateUrl: 'aula12-n2.html',
})
export class Nivel2_aula12Page {

  checado: string;

  treinosList: any[] = [
    {id: 161, treino: "Forma Siu Lim Tao", class: localStorage.getItem("161")},
    {id: 162, treino: "Forma pessoal do Nível 1", class: localStorage.getItem("162")},
    {id: 163, treino: "Revisão N2 A11", class: localStorage.getItem("163")},
    {id: 164, treino: "Ao chegar aqui, solicitar avaliação ao seu instrutor", class: localStorage.getItem("164")},
  ]; 

  lutas: any[] = [
    {id: 165, treino: "Lutas", valor: localStorage.getItem("165")}
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
    if(this.treinosList[id -161].class !== "checkmark"){
      this.treinosList[id -161].class = "checkmark";

      this.checado = this.treinosList[id-161].class;

      localStorage.setItem(this.treinosList[id-161].id, this.treinosList[id-161].class);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }else{
      this.treinosList[id -161].class = "";
      localStorage.setItem(this.treinosList[id-161].id, this.treinosList[id-161].class);

      this.checado = localStorage.getItem(id);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }

    return this.treinosList; 
  }
  incrementLutas(id) {
    this.lutas[id - 165].valor++;
    localStorage.setItem(this.lutas[id - 165].id, this.lutas[id - 165].valor);

    if (this.lutas[id - 165].valor === 2) {
      this.toast.create({ message: this.lutas[id - 165].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
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
            this.lutas[id - 165].valor--;
            localStorage.setItem(this.lutas[id - 165].id, this.lutas[id - 165].valor);
            this.toast.create({ message: this.lutas[id - 165].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
          }
        }
      ]
    });
    prompt.present();
  }

}