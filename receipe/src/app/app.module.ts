import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListService } from './shopping/shopping-list/shoppping-list.service';
import { ReceipesComponent } from './receipe/receipes/receipes.component';
import { ReceipeStartComponent } from './receipe/receipe-start/receipe-start.component';
import { ReceipeItemComponent } from './receipe/receipe-item/receipe-item.component';
import { ReceipeDetailComponent } from './receipe/receipe-detail/receipe-detail.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { ReceipeCreateComponent } from './receipe/receipe-create/receipe-create.component';
import { ShoppingEditComponent } from './shopping/shopping-edit/shopping-edit.component';
import { ReceipeListComponent } from './receipe/receipe-list/receipe-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipeListService } from './receipe/receipe-list/recipe-list.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReceipesComponent,
    ReceipeStartComponent,
    ReceipeItemComponent,
    ReceipeDetailComponent,
    ReceipeCreateComponent,
    ReceipeListComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],

  providers: [ShoppingListService, RecipeListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
