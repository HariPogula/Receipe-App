import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthInterceptorService } from 'src/app/auth/aith-interceptor.service';
import { ShoppingListService } from 'src/app/shopping/shopping-list/shoppping-list.service';
import { RecipeListService } from '../receipe-list/recipe-list.service';

@NgModule({
  providers: [
    ShoppingListService,
    RecipeListService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
})
export class CoreModule {}
