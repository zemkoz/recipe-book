import {Ingredient} from '../shared/model/ingredient.model';
import {EventEmitter} from '@angular/core';

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    {
      name: 'Apples',
      amount: 5
    },
    {
      name: 'Tomatoes',
      amount: 10
    }
  ];

  ingredientsChanged = new EventEmitter<Ingredient[]>();

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.getIngredients());
  }

  addIngredients(ingredients: Ingredient[]): void {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.getIngredients());
  }
}
