import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GetfilmsProvider } from '../../providers/getfilms/getfilms';
import { ToastController, ModalController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { ModalPage } from '../modal/modal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public actores:any;
  public peliculas:any;

  constructor(public navCtrl: NavController, public getData:GetfilmsProvider, public toastCtrl:ToastController, private myModal:ModalController) {

  }

  ionViewDidLoad() { 

    this.getData.getPeliculas()
      .subscribe( data => {
        this.peliculas = data;
      },
      error => {
        this.showToast("Error " + error);
      },
      () => {
        console.log(this.peliculas);
        this.actores = this.peliculas.results;
        /*if (this.peliculas) {
          if (this.peliculas.status) {
            console.log(JSON.stringify(this.peliculas.data));
            this.carreras = this.peliculas.data;
          }
          else {
            this.showToast(this.peliculas.mensaje);
          }
        }
        else {
          this.showToast("Problema con los datos de conexion");
        }*/
      }
    );
  }

  showModal(){
    console.log("Llega a modal");
    const mydata = {
      name:"Name",
      number:"123213"
    }

    const modal = this.myModal.create("ModalPage");
    modal.present(); 
  }


  showToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }


}
