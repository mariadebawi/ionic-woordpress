import { Component  } from '@angular/core';
import { NavController } from '@ionic/angular';

import * as wc from 'woocommerce-api' ;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 woocomm: any ;
 constructor(public nav: NavController) {
    this.woocomm = wc({
      url: 'http://wooionicv.test/wp-json/',
      ConsumerKey: 'ck_5b879165f562fa8ed2c9c9bab6d6aae0209e4579',
      ConsumerSecret: 'cs_3044f208018523c58b8be94485bcb6ebe8a05e25',
      wpAPI: true,
     // version: 'wc/v3'
    });
    this.woocomm.getAsyn('products').then((data) => {
      console.log('nice');
    } ,  (err) => {
      console.log('nooooooooooooooooooooooooo') ;
    });
  }
}
