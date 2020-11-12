import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './auth/auth-guard';
import { AuthComponent } from './auth/auth/auth.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';

const routes: Routes = [
  {
    path: 'recipes',
    loadChildren: () =>
      import('../app/receipe/recipe.module').then((r) => r.RecipeModule),
  },
  {
    path: 'shopping-list',
    loadChildren: () =>
      import('../app/shopping/shopping.modules').then((s) => s.ShoppingModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('../app/auth/auth.module').then((a) => a.AuthModule),
  },
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  // { path: '**', redirectTo: 'recipes', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],

  exports: [RouterModule],
})
export class AppRoutingModule {}
