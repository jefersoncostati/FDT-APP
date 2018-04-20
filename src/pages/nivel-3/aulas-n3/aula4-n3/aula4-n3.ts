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
  selector: 'page-nivel-3',
  templateUrl: 'aula4-n3.html',
})
export class Nivel3_aula4Page {

  checado: string;

  treinosList: any[] = [
    {id: 195, treino: "Forma as três conforme exporstas na Aula 1 Nível 3", class: localStorage.getItem("195")},
    {id: 196, treino: "Revisão N3 A1 - 1x10", class: localStorage.getItem("196")},
    {id: 197, treino: "Revisão N3 A2 - 3x10", class: localStorage.getItem("197")},
    {id: 198, treino: "Ponto Tan/Fook - 4x10", class: localStorage.getItem("198")},
    {id: 199, treino: "Pon Sao/Quebra - 4x10", class: localStorage.getItem("199")},
    {id: 200, treino: "Tan Chi Sao  1 - 4x10", class: localStorage.getItem("200")},
    {id: 201, treino: "Tan Chi Sao livre - Resto da aula", class: localStorage.getItem("201")},
  ]; 

  lutas: any[] = [
    {id: 202, treino: "Lutas", valor: localStorage.getItem("202")}
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
    if(this.treinosList[id - 195].class !== "checkmark"){
      this.treinosList[id - 195].class = "checkmark";

      this.checado = this.treinosList[id- 195].class;

      localStorage.setItem(this.treinosList[id- 195].id, this.treinosList[id- 195].class);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }else{
      this.treinosList[id - 195].class = "";
      localStorage.setItem(this.treinosList[id- 195].id, this.treinosList[id- 195].class);

      this.checado = localStorage.getItem(id);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }

    return this.treinosList; 
  }

  incrementLutas(id) {
    this.lutas[id - 202].valor++;
    localStorage.setItem(this.lutas[id - 202].id, this.lutas[id - 202].valor);

    if (this.lutas[id - 202].valor === 3) {
      this.toast.create({ message: this.lutas[id - 202].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
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
            this.lutas[id - 202].valor--;
            localStorage.setItem(this.lutas[id - 202].id, this.lutas[id - 202].valor);
            this.toast.create({ message: this.lutas[id - 202].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
          }
        }
      ]
    });
    prompt.present();
  }

}