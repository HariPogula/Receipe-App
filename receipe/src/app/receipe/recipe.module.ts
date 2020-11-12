import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { ReceipeCreateComponent } from './receipe-create/receipe-create.component';
import { ReceipeDetailComponent } from './receipe-detail/receipe-detail.component';
import { ReceipeItemComponent } from './receipe-item/receipe-item.component';
import { ReceipeListComponent } from './receipe-list/receipe-list.component';
import { ReceipeStartComponent } from './receipe-start/receipe-start.component';
import { ReceipesComponent } from './receipes/receipes.component';
import { RecipeRoutingModule } from './recipe-routing.modules';

@NgModule({
  declarations: [
    ReceipesComponent,
    ReceipeStartComponent,
    ReceipeItemComponent,
    ReceipeDetailComponent,
    ReceipeCreateComponent,
    ReceipeListComponent,
  ],
  imports: [
    RecipeRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ReceipesComponent,
    ReceipeStartComponent,
    ReceipeItemComponent,
    ReceipeDetailComponent,
    ReceipeCreateComponent,
    ReceipeListComponent,
  ],
})
export class RecipeModule {}
