import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuestionsPage } from './questions';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    QuestionsPage,
  ],
  imports: [
    IonicPageModule.forChild(QuestionsPage),
    TranslateModule.forChild()
  ],
  exports: [
    QuestionsPage
  ]
})
export class QuestionsPageModule { }
