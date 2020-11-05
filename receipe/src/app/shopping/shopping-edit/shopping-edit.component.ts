import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredeient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shoppping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  // @Output() ingredientAdded = new EventEmitter<Ingredeient>();

  @ViewChild('shoppingListForm') shoppingListForm: NgForm;
  addSubscription: Subscription;
  editMode: boolean = false;
  editedItemIndex: number;
  editedItem: Ingredeient;
  constructor(private slService: ShoppingListService) {}

  ngOnInit(): void {
    this.addSubscription = this.slService.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedItemIndex = index;
        this.editedItem = this.slService.getIngredient(index);
        this.shoppingListForm.setValue({
          name: this.editedItem.ingName,
          amount: this.editedItem.ingAmount,
        });
      }
    );
  }

  onAddItem(shoppingForm: NgForm) {
    const value = shoppingForm.value;
    if (this.editMode) {
      this.slService.updateIngredient(this.editedItemIndex, value);
    } else {
      this.slService.addingredient(value);
    }
    this.editMode = false;
    shoppingForm.reset();
    // this.ingredientAdded.emit(newIngredient);
  }
  onDelete() {
    this.slService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }
  onClear() {
    this.shoppingListForm.reset();
    this.editMode = false;
  }

  ngOnDestroy(): void {
    this.addSubscription.unsubscribe();
  }
}
