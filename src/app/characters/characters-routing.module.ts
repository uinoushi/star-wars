import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersDetailsComponent } from './characters-details/characters-details.component';
import { CharactersListsComponent } from './characters-lists/characters-lists.component';
import { CharactersComponent } from './characters.component';

const routes: Routes = [
  {
    path: '',
    component: CharactersComponent,
    children: [
      {
        path: '',
        component: CharactersListsComponent
      },
      {
        path: ':id',
        component: CharactersDetailsComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule {
  static components = [CharactersComponent, CharactersListsComponent, CharactersDetailsComponent]
}
