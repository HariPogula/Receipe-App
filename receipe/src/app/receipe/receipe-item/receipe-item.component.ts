import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-receipe-item',
  templateUrl: './receipe-item.component.html',
  styleUrls: ['./receipe-item.component.scss'],
})
export class ReceipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() recipeSelected = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}

  onSelected() {
    this.recipeSelected.emit();
  }
}
