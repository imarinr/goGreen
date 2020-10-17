import { Component } from '@angular/core';

/**
 * Generated class for the QuestionsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'questions',
  templateUrl: 'questions.html'
})
export class QuestionsComponent {

  text: string;

  constructor() {
    console.log('Hello QuestionsComponent Component');
    this.text = 'Hello World';
  }

}
