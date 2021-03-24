import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from '../../../shared/model/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe!: Recipe;
  @Output() recipeSelected = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.recipeSelected.emit();
  }
}
