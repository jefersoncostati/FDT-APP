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
  templateUrl: 'aula2-n3.html',
})
export class Nivel3_aula2Page {

  checado: string;

  treinosList: any[] = [
    {id: 178, treino: "Revisão Nível 1 - 1x5 completo", class: localStorage.getItem("178")},
    {id: 179, treino: "Revisão Nível 2 - 1x5 completo", class: localStorage.getItem("179")},
    {id: 180, treino: "Forma Pessoal - corrigir e aperfeiçoar sempre que possível", class: localStorage.getItem("180")},
    {id: 181, treino: "Forma Siu Lim Tao - uma repetição normal e uma com cada perna", class: localStorage.getItem("181")},
    {id: 182, treino: "Forma Chum Kiu - primeira metade", class: localStorage.getItem("182")},
    {id: 183, treino: "Revisão N3 A1 - 3x10", class: localStorage.getItem("183")},
  ]; 

  lutas: any[] = [
    {id: 184, treino: "Lutas", valor: localStorage.getItem("184")}
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
    if(this.treinosList[id -178].class !== "checkmark"){
      this.treinosList[id -178].class = "checkmark";

      this.checado = this.treinosList[id-178].class;

      localStorage.setItem(this.treinosList[id-178].id, this.treinosList[id-178].class);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }else{
      this.treinosList[id -178].class = "";
      localStorage.setItem(this.treinosList[id-178].id, this.treinosList[id-178].class);

      this.checado = localStorage.getItem(id);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }

    return this.treinosList; 
  }

  incrementLutas(id) {
    this.lutas[id - 184].valor++;
    localStorage.setItem(this.lutas[id - 184].id, this.lutas[id - 184].valor);

    if (this.lutas[id - 184].valor === 3) {
      this.toast.create({ message: this.lutas[id - 184].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
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
            this.lutas[id - 184].valor--;
            localStorage.setItem(this.lutas[id - 184].id, this.lutas[id - 184].valor);
            this.toast.create({ message: this.lutas[id - 184].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
          }
        }
      ]
    });
    prompt.present();
  }

}