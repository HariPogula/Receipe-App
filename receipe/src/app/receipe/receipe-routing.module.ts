import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReceipesComponent } from './receipes/receipes.component';
import { ReceipeListComponent } from './receipe-list/receipe-list.component';

const routes: Routes = [
  {
    path: '',
    component: ReceipesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReceipeRoutingModule {}
