import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'recipes',
    loadChildren: () =>
      import('./receipe/receipe.module').then((r) => r.ReceipeModule),
  },
  {
    path: 'shopping-list',
    loadChildren: () =>
      import('./shopping/shopping.module').then((s) => s.ShoppingModule),
  },
  { path: '', redirectTo: 'recipes', pathMatch: 'full' },
  { path: '**', redirectTo: 'recipes', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
