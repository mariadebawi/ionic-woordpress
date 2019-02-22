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
      url: 'https://artizone.tn/wp-json/wp/v2/product',
      ConsumerKey: 'ck_c52c9af62a03a61cab5df7d61e62587688f1cd38',
      ConsumerSecret: 'cs_5d9da923a3136759b7c1f731a7cf71715678cecc',
    });
    this.Woocommerce.getAsyn('products').then((data) => {
      console.log(JSON.parse(data.body));
      this.products = JSON.parse(data.body).products;
    }, (err) => {
      console.log(err) ;
    });
  }
}
