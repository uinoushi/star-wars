import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiPopupsComponent } from './ui-popups.component';



@NgModule({
  declarations: [UiPopupsComponent],
  exports: [UiPopupsComponent],
  imports: [
    CommonModule
  ]
})
export class UiPopupsModule { }
