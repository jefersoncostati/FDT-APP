import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


/**
 * Generated class for the Nivel_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nivel-5',
  templateUrl: 'nivel-5.html',
})
export class Nivel_5Page {

  checado: string;

  treinosList: any[] = [
    {id: 5326, treino: "Siu Lim Tao", valor: localStorage.getItem("5326")},
    {id: 5327, treino: "Siu Lim Tao Perna Esquerda", valor: localStorage.getItem("5327")},
    {id: 5328, treino: "Siu Lim Tao Perna Direita", valor: localStorage.getItem("5328")},
    {id: 5329, treino: "Chum Kiu", valor: localStorage.getItem("5329")},
    {id: 5330, treino: "Forma Pessoal", valor: localStorage.getItem("5330")},
    {id: 5331, treino: "Luta (3min)", valor: localStorage.getItem("5331")},
    {id: 5332, treino: "Luta x vários oponentes (3min)", valor: localStorage.getItem("5332")},
    {id: 5333, treino: "Luta de 1 toque", valor: localStorage.getItem("5333")},
    {id: 5334, treino: "Luta de um toque c/ faca", valor: localStorage.getItem("5334")},
    {id: 5335, treino: "Luta no canto (3min)", valor: localStorage.getItem("5335")},
    {id: 5336, treino: "Chi Sao vendando (3min)", valor: localStorage.getItem("5336")},
    {id: 5337, treino: "Chi Sao com faca (3min)", valor: localStorage.getItem("5337")},
    {id: 5338, treino: "Chi Gerk (3min)", valor: localStorage.getItem("5338")},
    {id: 5339, treino: "Fluência Indefinida (3min)", valor: localStorage.getItem("5339")},
    {id: 5340, treino: "Fluência Indefinida x faca (3min)", valor: localStorage.getItem("5340")},
    {id: 5341, treino: "Fluência Indefinida x bastão (3min)", valor: localStorage.getItem("5341")},
    {id: 5342, treino: "Intensivo contra chutes (3min)", valor: localStorage.getItem("5342")},
    {id: 5343, treino: "Controle de distância pleno (3min)", valor: localStorage.getItem("5343")},
    {id: 5344, treino: "Escapar do chão", valor: localStorage.getItem("5344")},
    {id: 5345, treino: "Pontos Pessoais", valor: localStorage.getItem("5345")},
    {id: 5346, treino: "Auxiliar colegas < N5", valor: localStorage.getItem("5346")},
  ];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private toast: ToastController,
    public alertCtrl: AlertController
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Nivel_1Page');
  }

  add(id){
    this.treinosList[id-5326].valor++;
    localStorage.setItem(this.treinosList[id-5326].id, this.treinosList[id-5326].valor);

    if(this.treinosList[id-5326].valor === 60){
      this.toast.create({ message: this.treinosList[id-5326].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
    }
  }

  decrement(id){
    let prompt = this.alertCtrl.create({
      title: 'Remover',
      message: "Tem certeza que deseja remover um treino da lista?",
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
            this.treinosList[id-5326].valor--;
            localStorage.setItem(this.treinosList[id-5326].id, this.treinosList[id-5326].valor);
            this.toast.create({ message: this.treinosList[id-5326].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
          }
        }
      ]
    });
    prompt.present();
  }

}
