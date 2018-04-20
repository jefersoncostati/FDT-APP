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
  templateUrl: 'aula12-n4.html',
})
export class Nivel4_aula12Page {

  checado: string;

  treinosList: any[] = [
    {id: 4331, treino: "Formas como na Aula 1 do Nível 4", class: localStorage.getItem("4331")},
    {id: 4332, treino: "Forma – Refinar, aperfeiçoar, acrescentar e/ou retirar movimentos da forma pessoal de forma que ela resuma com perfeição tudo visto até agora, adaptado ao seu uso e estilo pessoais", class: localStorage.getItem("4332")},
    {id: 4333, treino: "Pontos e Treinos – Refinar e aperfeiçoar os movimentos vistos desde o Nível  1 que se adaptem melhor ao seu biótipo, método de luta e preferências pessoais, bem como suas aplicações em luta e defesa pessoal", class: localStorage.getItem("4333")},
    {id: 4334, treino: "Ao chegar aqui, solicitar avaliação ao seu instrutor", class: localStorage.getItem("4334")},
  ]; 

  lutas: any[] = [
    {id: 4335, treino: "Lutas", valor: localStorage.getItem("4335")}
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
    if(this.treinosList[id -4331].class !== "checkmark"){
      this.treinosList[id -4331].class = "checkmark";

      this.checado = this.treinosList[id-4331].class;

      localStorage.setItem(this.treinosList[id-4331].id, this.treinosList[id-4331].class);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }else{
      this.treinosList[id -4331].class = "";
      localStorage.setItem(this.treinosList[id-4331].id, this.treinosList[id-4331].class);

      this.checado = localStorage.getItem(id);
      this.toast.create({ message: 'Alteração salva com sucesso', duration: 3000, position: 'botton' }).present();
    }

    return this.treinosList; 
  }

  incrementLutas(id) {
    this.lutas[id - 4335].valor++;
    localStorage.setItem(this.lutas[id - 4335].id, this.lutas[id - 4335].valor);

    if (this.lutas[id - 4335].valor === 4) {
      this.toast.create({ message: this.lutas[id - 4335].treino + ' Concluído', duration: 2720, position: 'botton' }).present();
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
            this.lutas[id - 4335].valor--;
            localStorage.setItem(this.lutas[id - 4335].id, this.lutas[id - 4335].valor);
            this.toast.create({ message: this.lutas[id - 4335].treino + ' Removido com sucesso.', duration: 2720, position: 'botton' }).present();
          }
        }
      ]
    });
    prompt.present();
  }
}