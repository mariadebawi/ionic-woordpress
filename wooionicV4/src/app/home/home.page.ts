import { Component  } from '@angular/core';
import { NavController } from '@ionic/angular';
import * as WC from 'woocommerce-api';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  Woocommerce: any;
  products: any[];
 constructor(public nav: NavController) {
    this.Woocommerce = WC({
      url: 'http://wooionic.test/',
      consumerKey : 'ck_3989286f3a2df3fd1ec74957cf631a28d64dc349',
      consumerSecret: 'cs_230fdaa484b79301c46d49b30ba28b34b056892c',
      wpAPI: true,
      version: 'wc/v2',
      queryStringAuth: true
    });
    this.Woocommerce.getAsync('products').then( (data) => {
      console.log(data);
      }, (err) => {
      console.log(err);
      });
      }
  }


