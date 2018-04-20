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
  templateUrl: 'aula5-n4.html',
})
export class Nivel4_aula5Page {

  checado: string;

  treinosList: any[] = [
    {id: 282, treino: "Formas como na Aula 1 do Nível 4", class: localStorage.getItem("282")},
    {id: 283, treino: "Ponto Sei Dim Gerk + Lian Kuen – 4x10", class: localStorage.getItem("283")},
    {id: 284, treino: "Ponto Biu Mah + Kan Sao – 4x10", class: localStorage.getItem("284")},
    {id: 285, treino: "Treino Kan Sao contra chutes altos laterais – 4x10", class: localStorage.getItem("285")},
    {id: 286, treino: "Treino Tan Gerk + Fluência contra Chum Sum Gerk – 4x10", class: localStorage.getItem("286")},
    {id: 287, treino: "Treino Tan Gerk + Fluência contra Chutes Laterais – 4x10", class: localStorage.getItem("287")},
    {id: 288, treino: "Treino Pon Gerk + Fluência contra Ding Gerk – 4x10", class: localStorage.getItem("288")},
    {id: 289, treino: "Chi Gerk em rounds de 3 min. e/ou Ajudar menos graduados pelo resto da aula", class: localStorage.getItem("289")},
  ]; 

  lutas: any[] = [
    {id: 290, treino: "Lutas", valor: localStorage.getItem("290")}
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
    if(this.treinosList[id -282].class !== "checkmark"){
      this.treinosList[id -282].class = "checkmark";

      this.checado = this.treinosList[id-282].class;

      localStorage.setItem(this.treinosList[id-282].id, this.treinosList[id-282].class);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }else{
      this.treinosList[id -282].class = "";
      localStorage.setItem(this.treinosList[id-282].id, this.treinosList[id-282].class);

      this.checado = localStorage.getItem(id);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }

    return this.treinosList; 
  }

  incrementLutas(id) {
    this.lutas[id - 290].valor++;
    localStorage.setItem(this.lutas[id - 290].id, this.lutas[id - 290].valor);

    if (this.lutas[id - 290].valor === 4) {
      this.toast.create({ message: this.lutas[id - 290].treino + ' Concluído', duration: 2720, position: 'botton' }).present();
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
            this.lutas[id - 290].valor--;
            localStorage.setItem(this.lutas[id - 290].id, this.lutas[id - 290].valor);
            this.toast.create({ message: this.lutas[id - 290].treino + ' Removido com sucesso.', duration: 2720, position: 'botton' }).present();
          }
        }
      ]
    });
    prompt.present();
  }

  

}