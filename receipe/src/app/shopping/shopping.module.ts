import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingRoutingModule } from './shopping-routing.module';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingDetailComponent } from './shopping-detail/shopping-detail.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingDetailComponent,
    ShoppingEditComponent,
  ],
  imports: [CommonModule, ShoppingRoutingModule],
  exports: [
    ShoppingListComponent,
    ShoppingDetailComponent,
    ShoppingEditComponent,
  ],
})
export class ShoppingModule {}
