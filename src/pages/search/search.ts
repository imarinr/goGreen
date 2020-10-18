import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// import { Item } from '../../models/item';
import { Items } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  LEVEL_SEMILLA = 0;
  LEVEL_BROTE = 1;
  LEVEL_PLANTA = 2;
  LEVEL_ARBOL = 3;
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
    this.putLevel(3);
  }
  
  putLevel(level: number) {
    let txt_level = document.getElementById('txt-nivel');
    // let icon_level = document.getElementById('icon_level');
    switch (level) {
      case this.LEVEL_SEMILLA:
        this.text_level = ' Semilla';
        this.img_level_src = 'assets/img/semilla.png';
        break;
      case this.LEVEL_BROTE:
        this.text_level = ' Brote';
        this.img_level_src = 'assets/img/brote.png';
        break;
        case  this.LEVEL_PLANTA:
          this.text_level = ' Planta';
          this.img_level_src = 'assets/img/planta.png';
          break;
        case this.LEVEL_ARBOL:
          this.text_level = ' Árbol';
          this.img_level_src = 'assets/img/arbol.png';
          break;
      default:
        break;
    }
    console.log('entre a putLevel');
    txt_level.innerText += this.text_level;
    // icon_level.src = this.img_level_src;

  }

}
