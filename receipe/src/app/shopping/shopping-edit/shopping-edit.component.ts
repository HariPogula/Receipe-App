import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { Ingredeient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('name', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amount', { static: false }) amountInputRef: ElementRef;

  @Output() ingredientAdded = new EventEmitter<Ingredeient>();

  constructor() {}

  ngOnInit(): void {}

  onAddItem() {
    const newIngredient = new Ingredeient(
      this.nameInputRef.nativeElement.value,
      this.amountInputRef.nativeElement.value
    );
    this.ingredientAdded.emit(newIngredient);
  }
}
