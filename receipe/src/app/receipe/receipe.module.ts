import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceipeRoutingModule } from './receipe-routing.module';
import { ReceipesComponent } from './receipes/receipes.component';
import { ReceipeListComponent } from './receipe-list/receipe-list.component';
import { ReceipeDetailComponent } from './receipe-detail/receipe-detail.component';
import { ReceipeItemComponent } from './receipe-item/receipe-item.component';
import { ShoppingModule } from '../shopping/shopping.module';
import { DropdownDirective } from '../shared/dropdown.directive';

@NgModule({
  declarations: [
    ReceipesComponent,
    ReceipeListComponent,
    ReceipeDetailComponent,
    ReceipeItemComponent,
    DropdownDirective,
  ],
  imports: [CommonModule, ReceipeRoutingModule, ShoppingModule],
  exports: [],
})
export class ReceipeModule {}
