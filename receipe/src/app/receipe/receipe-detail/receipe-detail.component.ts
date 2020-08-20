import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-receipe-detail',
  templateUrl: './receipe-detail.component.html',
  styleUrls: ['./receipe-detail.component.scss'],
})
export class ReceipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor() {}

  ngOnInit(): void {
    console.log('Recipe is ' + this.recipe);
  }
}
