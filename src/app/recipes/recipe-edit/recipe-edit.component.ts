import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  recipeId?: number;
  editMode = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.initEditRecipe(this.route.snapshot.params.id);
    this.route.params.subscribe((params: Params) => this.initEditRecipe(params.id));
  }

  initEditRecipe(recipeId?: number): void {
    this.recipeId = recipeId;
    this.editMode = this.recipeId != null;
  }
}
