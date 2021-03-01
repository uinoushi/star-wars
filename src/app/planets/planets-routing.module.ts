import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanetsDetailsComponent } from './planets-details/planets-details.component';
import { PlanetsListsComponent } from './planets-lists/planets-lists.component';
import { PlanetsComponent } from './planets.component';

const routes: Routes = [
  {
    path: '',
    component: PlanetsComponent,
    children: [
      {
        path: '',
        component: PlanetsListsComponent
      },
      {
        path: ':id',
        component: PlanetsDetailsComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanetsRoutingModule {
  static components = [PlanetsComponent, PlanetsListsComponent, PlanetsDetailsComponent]
}
