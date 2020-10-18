import { Component } from '@angular/core';
import {IonicPage, MenuController, NavController, Platform } from 'ionic-angular';

import { TranslateService } from '@ngx-translate/core';

export interface Slide {
  title: string;
  description: string;
  image: string;

}

@IonicPage()
@Component({
  selector: 'page-questions',
  templateUrl: 'questions.html'
})
export class QuestionsPage {
  slides: Slide[];
  showSkip = false;
  dir: string = 'ltr';
  tabbs: any;

  constructor(public navCtrl: NavController, public menu: MenuController, translate: TranslateService, public platform: Platform) {
    this.dir = platform.dir();
    translate.get(["TUTORIAL_SLIDE1_TITLE",
      "TUTORIAL_SLIDE1_DESCRIPTION",
      "TUTORIAL_SLIDE2_TITLE",
      "TUTORIAL_SLIDE2_DESCRIPTION",
      "TUTORIAL_SLIDE3_TITLE",
      "TUTORIAL_SLIDE3_DESCRIPTION",
    ]).subscribe(
      (values) => {
        console.log('Loaded values', values);
        this.slides = [
          {
            title: "Consumo Eléctrico",
            description: "Consumo en kilowatts por bimestre",
            image: 'assets/img/electricidadQ.png',
          },
          {
            title: "Transporte",
            description: "Tipo de transporte",
            image: 'assets/img/transporte.png',
          },
          {
            title: "Transporte",
            description: "Tipo de transporte",
            image: 'assets/img/transporte.png',
          },
          {
            title: "Resiudos",
            description: "Reciclas",
            image: 'assets/img/desperdicios.png',
          },
          {
            title: "Alimetación",
            description: "Tipo de dieta:",
            image: 'assets/img/alimetacion.png',
          },
        ];
      });

      this.tabbs = document.querySelector('.tabbar');
  }

  startApp() {
    this.navCtrl.setRoot('ListMasterPage', {}, {
      animate: true,
      direction: 'forward'
    });
  }

  onSlideChangeStart(slider) {
    this.showSkip = !slider.isEnd();
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
    this.tabbs.style.display = 'none';
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
    this.tabbs.style.display = 'flex';
  }

  calcularHuellaTransporte(tipoAuto: number) {
    switch(tipoAuto){}
  }

  calcularHuellaEnergía() {

  }

  calcularHuellaAlimentacion() {

  }
  calcularHuellaResiduos() {

  }
}
