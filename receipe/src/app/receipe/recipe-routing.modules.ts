import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth-guard';
import { ReceipeCreateComponent } from './receipe-create/receipe-create.component';
import { ReceipeDetailComponent } from './receipe-detail/receipe-detail.component';
import { ReceipeStartComponent } from './receipe-start/receipe-start.component';
import { ReceipesComponent } from './receipes/receipes.component';

const routes: Routes = [
  {
    path: '',
    // loadChildren: () =>
    //   import('./receipe/receipe.module').then((r) => r.ReceipeModule),
    component: ReceipesComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: ReceipeStartComponent },
      { path: 'new', component: ReceipeCreateComponent },
      { path: ':id', component: ReceipeDetailComponent },
      { path: ':id/edit', component: ReceipeCreateComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipeRoutingModule {}
