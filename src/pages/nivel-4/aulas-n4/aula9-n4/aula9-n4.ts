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
  templateUrl: 'aula9-n4.html',
})
export class Nivel4_aula9Page {

  checado: string;

  treinosList: any[] = [
    {id: 317, treino: "Formas como na Aula 1 do Nível 4", class: localStorage.getItem("317")},
    {id: 318, treino: "Pontos e Treinos de repetição do Nível 4. 1x10", class: localStorage.getItem("318")},
    {id: 319, treino: "Circuito Intensivo contra chutes, fluência indefinida. 3 vez", class: localStorage.getItem("319")},
    {id: 320, treino: "Chi Sao Pleno pelo resto da aula", class: localStorage.getItem("320")},
  ]; 

  lutas: any[] = [
    {id: 321, treino: "Lutas", valor: localStorage.getItem("321")}
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
    if(this.treinosList[id -317].class !== "checkmark"){
      this.treinosList[id -317].class = "checkmark";

      this.checado = this.treinosList[id-317].class;

      localStorage.setItem(this.treinosList[id-317].id, this.treinosList[id-317].class);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }else{
      this.treinosList[id -317].class = "";
      localStorage.setItem(this.treinosList[id-317].id, this.treinosList[id-317].class);

      this.checado = localStorage.getItem(id);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }

    return this.treinosList; 
  }

  incrementLutas(id) {
    this.lutas[id - 321].valor++;
    localStorage.setItem(this.lutas[id - 321].id, this.lutas[id - 321].valor);

    if (this.lutas[id - 321].valor === 4) {
      this.toast.create({ message: this.lutas[id - 321].treino + ' Concluído', duration: 2720, position: 'botton' }).present();
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
            this.lutas[id - 321].valor--;
            localStorage.setItem(this.lutas[id - 321].id, this.lutas[id - 321].valor);
            this.toast.create({ message: this.lutas[id - 321].treino + ' Removido com sucesso.', duration: 2720, position: 'botton' }).present();
          }
        }
      ]
    });
    prompt.present();
  }
}