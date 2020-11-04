import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReceipeCreateComponent } from './receipe/receipe-create/receipe-create.component';
import { ReceipeDetailComponent } from './receipe/receipe-detail/receipe-detail.component';
import { ReceipeStartComponent } from './receipe/receipe-start/receipe-start.component';
import { ReceipesComponent } from './receipe/receipes/receipes.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';

const routes: Routes = [
  {
    path: 'recipes',
    // loadChildren: () =>
    //   import('./receipe/receipe.module').then((r) => r.ReceipeModule),
    component: ReceipesComponent,
    children: [
      { path: '', component: ReceipeStartComponent },
      { path: 'new', component: ReceipeCreateComponent },
      { path: ':id', component: ReceipeDetailComponent },
      { path: ':id/edit', component: ReceipeCreateComponent },
    ],
  },
  {
    path: 'shopping-list',
    component: ShoppingListComponent,
    // loadChildren: () =>
    //   import('./shopping/shopping.module').then((s) => s.ShoppingModule),
  },
  { path: '', redirectTo: 'recipes', pathMatch: 'full' },
  { path: '**', redirectTo: 'recipes', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
