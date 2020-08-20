import { Component, OnInit } from '@angular/core';
import { Ingredeient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredeient[] = [
    new Ingredeient('Apples', 5),
    new Ingredeient('Mango', 10),
  ];
  constructor() {}

  ngOnInit(): void {}

  inIngAdded(newIng: Ingredeient) {
    console.log(`Ing is ${JSON.stringify(newIng)}`);
    this.ingredients.push(newIng);
  }
}
