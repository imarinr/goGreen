import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, Platform } from 'ionic-angular';

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
            title: "Trnansporte",
            description: "Tipo de transporte",
            image: 'assets/img/transporte.png',
          }
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

  calcularHuellaTransporte(tipoTransporte: number, diasALaSemana: number) {
    switch(tipoTransporte) { 
      case tipoTransporte =1 :{ 
       //Auto
       let kilo_CO2_mes = (1696/365)*diasALaSemana*4;
       return kilo_CO2_mes; 
      } 

      case tipoTransporte =2 :{ 
       //Moto
       let kilo_CO2_mes = (884/365)*diasALaSemana*4;
       return kilo_CO2_mes; 
      } 

      case tipoTransporte =3 :{ 
       //Bus
       let kilo_CO2_mes = ((1054/365)/20)*diasALaSemana*4;
       return kilo_CO2_mes; 
      } 
       
      default: { 
       //statements; 
       break; 
      } 
   } 
  }

  calcularHuellaEnergía(kilowattsHr: number) {
    let kw_mes = kilowattsHr / 2;
    let mw_mes = kw_mes / 1000;
    let kg_CO2_mes = (mw_mes * 0.505)*1000;
    return kg_CO2_mes
  }

  calcularHuellaAlimentacion(dieta: number) {
    switch(dieta) { 
      case dieta=1 :{ 
         //Carne res o cordero todos los dias
        let kilo_CO2_mes = 342;
        return kilo_CO2_mes; 
      } 
      case dieta=2 :{ 
         //carne  res o cordero 4-6 veces a la semana
         let kilo_CO2_mes = 283;
         return kilo_CO2_mes; 
      } 
      case dieta=3 :{ 
         //Carne  res o cordero 1-3 veces a la semana
        let kilo_CO2_mes = 195;
        return kilo_CO2_mes;  
      } 
      case dieta=4 :{ 
         //Carne que no sea de res 7 veces a la semana
         let kilo_CO2_mes = 136;
         return kilo_CO2_mes; 
      } 
      case dieta=5 :{ 
        //Dieta Vegana; 
        let kilo_CO2_mes = 84;
        return kilo_CO2_mes; 
      } 
      default: { 
         //statements; 
        break; 
      } 
   } 
  }
  calcularHuellaResiduos(basura: boolean) {
    if (basura == false){
      let kilo_CO2_mes = 15;
      return kilo_CO2_mes;
    }else{
      let kilo_CO2_mes = 0;
      return kilo_CO2_mes;
    }
    
  }
}
