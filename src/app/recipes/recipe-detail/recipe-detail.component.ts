import {Component, OnInit} from '@angular/core';
import {Recipe} from '../../shared/model/recipe.model';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe?: Recipe;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService) {
  }

  ngOnInit(): void {
    this.updateRecipe(+this.route.snapshot.params.id);
    this.route.params.subscribe((params: Params) => {
      this.updateRecipe(+params.id);
    });
  }

  updateRecipe(recipeId: number): void {
    if (!this.recipe || this.recipe.id !== recipeId) {
      this.recipe = this.recipeService.findRecipeById(recipeId);
    }
  }

  addIngredientsToShoppingList(): void {
    if (this.recipe) {
      this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
    }
  }
}
