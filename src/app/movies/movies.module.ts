import { NgModule } from '@angular/core';

import { MoviesRoutingModule } from './movies-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [MoviesRoutingModule.components],
  imports: [
    CommonModule,
    SharedModule,
    MoviesRoutingModule,
    FontAwesomeModule
  ]
})
export class MoviesModule { }
