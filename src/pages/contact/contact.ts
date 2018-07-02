import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GetfilmsProvider } from '../../providers/getfilms/getfilms';
import { ToastController } from 'ionic-angular';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  public vehicles:any;
  public peliculas:any;

  constructor(public navCtrl: NavController, public getData:GetfilmsProvider, public toastCtrl:ToastController) {

  }

  ionViewDidLoad() { 

    this.getData.getVehicles()
      .subscribe( data => {
        this.peliculas = data;
      },
      error => {
        this.showToast("Error " + error);
      },
      () => {
        console.log(this.peliculas);
        this.vehicles = this.peliculas.results;
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


  showToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

}
