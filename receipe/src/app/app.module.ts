import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

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
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { AuthComponent } from './auth/auth/auth.component';
import { AuthInterceptorService } from './auth/aith-interceptor.service';
import { AlertComponent } from './shared/alert/alert.component';

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
    AuthComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFirestoreModule,
  ],

  providers: [
    ShoppingListService,
    RecipeListService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
