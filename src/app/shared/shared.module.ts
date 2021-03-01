import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataBankEntityListComponent } from './data-bank-entity-list/data-bank-entity-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { PosterComponent } from './poster/poster.component';
import { FormInputTextComponent } from './form-input-text/form-input-text.component';
import { FormInputSelectComponent } from './form-input-select/form-input-select.component';
import { AddPlanetsComponent } from './forms/add-planets/add-planets.component';
import { AddCharacterComponent } from './forms/add-character/add-character.component';

@NgModule({
  declarations: [
    DataBankEntityListComponent, 
    CardComponent, 
    PosterComponent, 
    FormInputTextComponent, 
    FormInputSelectComponent, 
    AddPlanetsComponent, 
    AddCharacterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  exports: [
    DataBankEntityListComponent, 
    CardComponent, 
    PosterComponent, 
    FormInputTextComponent,
    AddPlanetsComponent, 
    AddCharacterComponent
  ],
})
export class SharedModule { }
