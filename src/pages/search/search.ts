import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  LEVEL_SEMILLA = 0;
  LEVEL_BROTE = 1;
  currentItems: any = [];

  img_level_src = 'assets/img/arbol.jpg';
  text_level = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public items: Items) { 
    
  }

  /**
   * Perform a service for the proper items.
   */
 /*  getItems(ev) {
    let val = ev.target.value;
    if (!val || !val.trim()) {
      this.currentItems = [];
      return;
    }
    this.currentItems = this.items.query({
      name: val
    });
  }
 */
  /**
   * Navigate to the detail page for this item.
   */
  /* openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  } */

  ionViewDidEnter() {
    this.putLevel(0);
  }
  
  putLevel(level: number) {
    let txt_level = document.getElementById('txt-nivel');
    let icon_level = document.getElementById('icon_level');
    switch (level) {
      case this.LEVEL_SEMILLA:
        this.text_level = ' Semilla';
        break;
    
      default:
        break;
    }
    console.log('entre a putLevel');
    txt_level.innerText += this.text_level;
    
  }

}
