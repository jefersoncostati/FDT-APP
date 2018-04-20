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
  templateUrl: 'aula10-n3.html',
})
export class Nivel3_aula10Page {

  checado: string;

  treinosList: any[] = [
    {id: 245, treino: "Formas (as três) conforme expostas na Aula 1 do Nivel 3", class: localStorage.getItem("245")},
    {id: 246, treino: "Revisão de todos os Pontos e Treinos de repetição do Nível 3 até agora - 1x10", class: localStorage.getItem("246")},
    {id: 247, treino: "Revisão extra das aulas 8 e 9 do Nível 3 – 2x10", class: localStorage.getItem("247")},
    {id: 248, treino: "Treino de fluência indefinido – 3x3min / 1 de descanso", class: localStorage.getItem("248")},
    {id: 249, treino: "Treino intensivo contra chutes – 3x3min / 1 de descanso", class: localStorage.getItem("249")},
    {id: 250, treino: "Luta contra vários oponentes – 3x3min / 1 de descanso", class: localStorage.getItem("250")},
    {id: 251, treino: "Treino de Chi Sao livre – 3x3min / 1 de descanso", class: localStorage.getItem("251")},
  ]; 

  lutas: any[] = [
    {id: 252, treino: "Lutas", valor: localStorage.getItem("252")}
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
    if(this.treinosList[id -245].class !== "checkmark"){
      this.treinosList[id -245].class = "checkmark";

      this.checado = this.treinosList[id-245].class;

      localStorage.setItem(this.treinosList[id-245].id, this.treinosList[id-245].class);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }else{
      this.treinosList[id -245].class = "";
      localStorage.setItem(this.treinosList[id-245].id, this.treinosList[id-245].class);

      this.checado = localStorage.getItem(id);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }

    return this.treinosList; 
  }

  incrementLutas(id) {
    this.lutas[id - 252].valor++;
    localStorage.setItem(this.lutas[id - 252].id, this.lutas[id - 252].valor);

    if (this.lutas[id - 252].valor === 3) {
      this.toast.create({ message: this.lutas[id - 252].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
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
            this.lutas[id - 252].valor--;
            localStorage.setItem(this.lutas[id - 252].id, this.lutas[id - 252].valor);
            this.toast.create({ message: this.lutas[id - 252].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
          }
        }
      ]
    });
    prompt.present();
  }

}