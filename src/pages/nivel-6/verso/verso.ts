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
  selector: 'page-verso',
  templateUrl: 'verso.html',
})
export class Verso_Page {

  linha: number;
  posicao: number;

  treinoPadraoVerso: any[] = [
    { id: 395, treino: "Forma Siu Lim Tao", valor: localStorage.getItem("395") },
    { id: 396, treino: "Forma Siu Lim Tao perna esquerda", valor: localStorage.getItem("396") },
    { id: 397, treino: "Forma Siu Lim Tao perna direita", valor: localStorage.getItem("397") },
    { id: 398, treino: "Forma Chum Kiu", valor: localStorage.getItem("398") },
    { id: 399, treino: "Forma Pessoal", valor: localStorage.getItem("399") },
    { id: 400, treino: "Forma Biu Jee", valor: localStorage.getItem("400") },
    { id: 401, treino: "Bai Jee Vertical (ambos os lados) - 1min", valor: localStorage.getItem("401") },
    { id: 402, treino: "Bai Jee Horizontal (ambos os lados) - 1min", valor: localStorage.getItem("402") },
    { id: 403, treino: "Bai Jee Circulando (ambos os lados) - 1min", valor: localStorage.getItem("403") },
    { id: 404, treino: "Tai Jee Vertical (ambos os lados) - 1min", valor: localStorage.getItem("404") },
    { id: 405, treino: "Tai Jee Horizontal (ambos os lados) - 1min", valor: localStorage.getItem("405") },
    { id: 406, treino: "Tres Lutas (variar oponentes) - 3min", valor: localStorage.getItem("406") },
  ];

  aulasImpares: any[] = [
    { id: 407, treino: "Luta com faca - 3min", valor: localStorage.getItem("407") },
    { id: 408, treino: "Intensivo contra Bastão - 3 min", valor: localStorage.getItem("408") },
    { id: 409, treino: "Luta contra varios oponentes - 3min", valor: localStorage.getItem("409") },
    { id: 410, treino: "Chi Sao Vendado - 3min", valor: localStorage.getItem("410") },
    { id: 411, treino: "Chi Gerk - 3min", valor: localStorage.getItem("410") },
  ];

  aulasPares: any[] = [
    { id: 412, treino: "Intensivo contra Faca - 3min", valor: localStorage.getItem("412") },
    { id: 413, treino: "Intensivo contra Chutes - 3 min", valor: localStorage.getItem("413") },
    { id: 414, treino: "Chi Sao com Faca Vendado - 3min", valor: localStorage.getItem("414") },
    { id: 415, treino: "Escapar do chão - 1x", valor: localStorage.getItem("415") },
    { id: 416, treino: "Fluência indefininda - 3min", valor: localStorage.getItem("416") },
  ];


  biuJee: any[] = [
    { id: 417, nome: "Biu Jee", recode: localStorage.getItem("417") },
    { id: 418, nome: "Biu Jee", recode: localStorage.getItem("418") },
    { id: 419, nome: "Biu Jee", recode: localStorage.getItem("419") },
    { id: 420, nome: "Biu Jee", recode: localStorage.getItem("420") },
    { id: 421, nome: "Biu Jee", recode: localStorage.getItem("421") },
    { id: 422, nome: "Biu Jee", recode: localStorage.getItem("422") },
    { id: 423, nome: "Biu Jee", recode: localStorage.getItem("423") },
    { id: 424, nome: "Biu Jee", recode: localStorage.getItem("424") },
    { id: 425, nome: "Biu Jee", recode: localStorage.getItem("425") },
    { id: 426, nome: "Biu Jee", recode: localStorage.getItem("426") },
    { id: 427, nome: "Biu Jee", recode: localStorage.getItem("427") },
    { id: 428, nome: "Biu Jee", recode: localStorage.getItem("428") },
  ];

  jinKuen: any[] = [
    { id: 429, nome: "Jin Kuen", recode: localStorage.getItem("429") },
    { id: 430, nome: "Jin Kuen", recode: localStorage.getItem("430") },
    { id: 431, nome: "Jin Kuen", recode: localStorage.getItem("431") },
    { id: 432, nome: "Jin Kuen", recode: localStorage.getItem("432") },
    { id: 433, nome: "Jin Kuen", recode: localStorage.getItem("433") },
    { id: 434, nome: "Jin Kuen", recode: localStorage.getItem("434") },
    { id: 435, nome: "Jin Kuen", recode: localStorage.getItem("435") },
    { id: 436, nome: "Jin Kuen", recode: localStorage.getItem("436") },
    { id: 437, nome: "Jin Kuen", recode: localStorage.getItem("437") },
    { id: 438, nome: "Jin Kuen", recode: localStorage.getItem("438") },
    { id: 439, nome: "Jin Kuen", recode: localStorage.getItem("439") },
    { id: 440, nome: "Jin Kuen", recode: localStorage.getItem("440") },
  ];

  kwaiJang: any[] = [
    { id: 441, nome: "Kuai Jang", recode: localStorage.getItem("441") },
    { id: 442, nome: "Kuai Jang", recode: localStorage.getItem("442") },
    { id: 443, nome: "Kuai Jang", recode: localStorage.getItem("443") },
    { id: 444, nome: "Kuai Jang", recode: localStorage.getItem("444") },
    { id: 445, nome: "Kuai Jang", recode: localStorage.getItem("445") },
    { id: 446, nome: "Kuai Jang", recode: localStorage.getItem("446") },
    { id: 447, nome: "Kuai Jang", recode: localStorage.getItem("447") },
    { id: 448, nome: "Kuai Jang", recode: localStorage.getItem("448") },
    { id: 449, nome: "Kuai Jang", recode: localStorage.getItem("449") },
    { id: 450, nome: "Kuai Jang", recode: localStorage.getItem("450") },
    { id: 451, nome: "Kuai Jang", recode: localStorage.getItem("451") },
    { id: 452, nome: "Kuai Jang", recode: localStorage.getItem("452") },
  ];

  samBaiFa: any[] = [
    { id: 453, nome: "Sam Bai Fa", recode: localStorage.getItem("453") },
    { id: 454, nome: "Sam Bai Fa", recode: localStorage.getItem("454") },
    { id: 455, nome: "Sam Bai Fa", recode: localStorage.getItem("455") },
    { id: 456, nome: "Sam Bai Fa", recode: localStorage.getItem("456") },
    { id: 457, nome: "Sam Bai Fa", recode: localStorage.getItem("457") },
    { id: 458, nome: "Sam Bai Fa", recode: localStorage.getItem("458") },
    { id: 459, nome: "Sam Bai Fa", recode: localStorage.getItem("459") },
    { id: 460, nome: "Sam Bai Fa", recode: localStorage.getItem("460") },
    { id: 461, nome: "Sam Bai Fa", recode: localStorage.getItem("461") },
    { id: 462, nome: "Sam Bai Fa", recode: localStorage.getItem("462") },
    { id: 463, nome: "Sam Bai Fa", recode: localStorage.getItem("463") },
    { id: 464, nome: "Sam Bai Fa", recode: localStorage.getItem("464") },
  ];


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private toast: ToastController,
    public alertCtrl: AlertController,
  ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Verso_Page');
  }


  addLinha(valor) {
    this.linha = valor;
    console.log(this.linha);
  }

  addBiuJee(valorR) {

    if (this.linha == null) {
      let prompt = this.alertCtrl.create({
        title: 'Remover',
        message: "Escolha uma linha",
        buttons: [
          {
            text: 'Ok',
            handler: data => {
          
            }
          }
        ]
      });
      prompt.present();
      return;
    } else {
      this.biuJee[this.linha].recode = valorR;
      localStorage.setItem(this.biuJee[this.linha].id, this.biuJee[this.linha].recode);
      this.linha = null;
    }
  }

  addJinKuen(valorR) {

    if (this.linha == null) {
      let prompt = this.alertCtrl.create({
        title: 'Remover',
        message: "Escolha uma linha",
        buttons: [
          {
            text: 'Ok',
            handler: data => {
          
            }
          }
        ]
      });
      prompt.present();
      return;
    } else {
      this.jinKuen[this.linha].recode = valorR;
      localStorage.setItem(this.jinKuen[this.linha].id, this.jinKuen[this.linha].recode);
      this.linha = null;
    }
  }

  addKwaiJang(valorR) {

    if (this.linha == null) {
      let prompt = this.alertCtrl.create({
        title: 'Remover',
        message: "Escolha uma linha",
        buttons: [
          {
            text: 'Ok',
            handler: data => {
          
            }
          }
        ]
      });
      prompt.present();
      return;
    } else {
      this.kwaiJang[this.linha].recode = valorR;
      localStorage.setItem(this.kwaiJang[this.linha].id, this.kwaiJang[this.linha].recode);
      this.linha = null;
    }
  }

  addSamBaiFa(valorR) {

    if (this.linha == null) {
      let prompt = this.alertCtrl.create({
        title: 'Remover',
        message: "Escolha uma linha",
        buttons: [
          {
            text: 'Ok',
            handler: data => {
          
            }
          }
        ]
      });
      prompt.present();
      return;
    } else {
      this.samBaiFa[this.linha].recode = valorR;
      localStorage.setItem(this.samBaiFa[this.linha].id, this.samBaiFa[this.linha].recode);
      this.linha = null;
    }
  }

  add(id) {
    this.treinoPadraoVerso[id - 395].valor++;
    localStorage.setItem(this.treinoPadraoVerso[id - 395].id, this.treinoPadraoVerso[id - 395].valor);

    if (this.treinoPadraoVerso[id - 395].valor === 12) {
      this.toast.create({ message: this.treinoPadraoVerso[id - 395].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
    }
  }

  decrement(id) {
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
            this.treinoPadraoVerso[id - 395].valor--;
            localStorage.setItem(this.treinoPadraoVerso[id - 395].id, this.treinoPadraoVerso[id - 395].valor);
            this.toast.create({ message: this.treinoPadraoVerso[id - 395].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
          }
        }
      ]
    });
    prompt.present();
  }

  incrementAulasImpares(id) {
    this.aulasImpares[id - 407].valor++;
    localStorage.setItem(this.aulasImpares[id - 407].id, this.aulasImpares[id - 407].valor);

    if (this.aulasImpares[id - 407].valor === 6) {
      this.toast.create({ message: this.aulasImpares[id - 407].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
    }
  }

  decrementAulasImpares(id) {
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
            this.aulasImpares[id - 407].valor--;
            localStorage.setItem(this.aulasImpares[id - 407].id, this.aulasImpares[id - 407].valor);
            this.toast.create({ message: this.aulasImpares[id - 407].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
          }
        }
      ]
    });
    prompt.present();
  }

  incrementAulasPares(id) {
    this.aulasPares[id - 412].valor++;
    localStorage.setItem(this.aulasPares[id - 412].id, this.aulasPares[id - 412].valor);

    if (this.aulasPares[id - 412].valor === 6) {
      this.toast.create({ message: this.aulasPares[id - 412].treino + ' Concluído', duration: 3000, position: 'botton' }).present();
    }
  }

  decrementAulasPares(id) {
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
            this.aulasPares[id - 412].valor--;
            localStorage.setItem(this.aulasPares[id - 412].id, this.aulasPares[id - 412].valor);
            this.toast.create({ message: this.aulasPares[id - 412].treino + ' Removido com sucesso.', duration: 3000, position: 'botton' }).present();
          }
        }
      ]
    });
    prompt.present();
  }
}