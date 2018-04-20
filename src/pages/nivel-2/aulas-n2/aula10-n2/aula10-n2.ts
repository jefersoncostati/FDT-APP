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
  templateUrl: 'aula10-n2.html',
})
export class Nivel2_aula10Page {

  checado: string;

  treinosList: any[] = [
    {id: 146, treino: "Forma Siu Lim Tao", class: localStorage.getItem("146")},
    {id: 147, treino: "Forma pessoas Nível 1", class: localStorage.getItem("147")},
    {id: 148, treino: "Luta de um toque, uma vez com cada aluno aptp (min 5 lutas)", class: localStorage.getItem("148")},
    {id: 149, treino: "Revisão N1 completo e N2 até A9 - 1x5 cada", class: localStorage.getItem("149")},
  ]; 

  lutas: any[] = [
    {id: 150, treino: "Lutas", valor: localStorage.getItem("150")}
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
    if(this.treinosList[id -146].class !== "checkmark"){
      this.treinosList[id -146].class = "checkmark";

      this.checado = this.treinosList[id-146].class;

      localStorage.setItem(this.treinosList[id-146].id, this.treinosList[id-146].class);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }else{
      this.treinosList[id -146].class = "";
      localStorage.setItem(this.treinosList[id-146].id, this.treinosList[id-146].class);

      this.checado = localStorage.getItem(id);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }

    return this.treinosList; 
  }

  incrementLutas(id) {
    this.lutas[id - 150].valor++;
    localStorage.setItem(this.lutas[id - 150].id, this.lutas[id - 150].valor);

    if (this.lutas[id - 150].valor === 2) {
      this.toast.create({ message: this.lutas[id - 150].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
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
            this.lutas[id - 150].valor--;
            localStorage.setItem(this.lutas[id - 150].id, this.lutas[id - 150].valor);
            this.toast.create({ message: this.lutas[id - 150].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
          }
        }
      ]
    });
    prompt.present();
  }

}