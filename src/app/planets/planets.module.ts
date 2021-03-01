import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PlanetsRoutingModule } from './planets-routing.module';



@NgModule({
  declarations: [PlanetsRoutingModule.components],
  imports: [
    CommonModule,
    SharedModule,
    FontAwesomeModule,
    PlanetsRoutingModule
  ]
})
export class PlanetsModule { }
