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
  templateUrl: 'aula2-n2.html',
})
export class Nivel2_aula2Page {

  checado: string;

  treinosList: any[] = [
    {id: 74, treino: "Forma Siu Lim Tao", class: localStorage.getItem("74")},
    {id: 75, treino: "Ponto Lan Sao/Fak Sao- 2x10", class: localStorage.getItem("75")},
    {id: 76, treino: "Treino Fak Sao/Lap Da - 4x10", class: localStorage.getItem("76")},
    {id: 77, treino: "Treino Pak-Da com braço colado / Lap-Da contra wu-sao - 4x10", class: localStorage.getItem("77")},
    {id: 78, treino: "Treino Pak-Da com braço colado / Lan-Da contra wu-sao - 4x10", class: localStorage.getItem("78")},
    {id: 79, treino: "Ponto Fak Sao/Lan Sao/Jut Sao - 2x10", class: localStorage.getItem("79")},
    {id: 80, treino: "Lan Sao/Jut Sao contra Lap Sao - 4x10", class: localStorage.getItem("80")},
    {id: 81, treino: "Tok Sao - 4x10", class: localStorage.getItem("81")},
    {id: 82, treino: "Revisao N2 A1 - 3x10", class: localStorage.getItem("82")},
  ]; 

  lutas: any[] = [
    {id: 83, treino: "Lutas", valor: localStorage.getItem("83")}
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
    if(this.treinosList[id -74].class !== "checkmark"){
      this.treinosList[id -74].class = "checkmark";

      this.checado = this.treinosList[id-74].class;

      localStorage.setItem(this.treinosList[id-74].id, this.treinosList[id-74].class);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }else{
      this.treinosList[id -74].class = "";
      localStorage.setItem(this.treinosList[id-74].id, this.treinosList[id-74].class);

      this.checado = localStorage.getItem(id);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }

    return this.treinosList; 
  }
  incrementLutas(id) {
    this.lutas[id - 83].valor++;
    localStorage.setItem(this.lutas[id - 83].id, this.lutas[id - 83].valor);

    if (this.lutas[id - 83].valor === 2) {
      this.toast.create({ message: this.lutas[id - 83].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
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
            this.lutas[id - 83].valor--;
            localStorage.setItem(this.lutas[id - 83].id, this.lutas[id - 83].valor);
            this.toast.create({ message: this.lutas[id - 83].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
          }
        }
      ]
    });
    prompt.present();
  }

}