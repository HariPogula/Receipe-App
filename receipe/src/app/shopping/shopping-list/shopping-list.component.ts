import { Component, OnInit } from '@angular/core';
import { Ingredeient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from './shoppping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredeient[];
  constructor(private slService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients();
    this.slService.ingChanged.subscribe((ing: Ingredeient[]) => {
      this.ingredients = ing;
    });
  }

  // inIngAdded(newIng: Ingredeient) {
  //   console.log(`Ing is ${JSON.stringify(newIng)}`);
  //   this.ingredients.push(newIng);
  // }
}
