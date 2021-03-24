import {Component, ElementRef, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/model/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInput!: ElementRef;
  @ViewChild('amountInput') amountInput!: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {
  }

  onAddItem(): void {
    const name = this.nameInput.nativeElement.value;
    const amount = this.amountInput.nativeElement.value;

    const ingredient: Ingredient = { name, amount };
    this.shoppingListService.addIngredient(ingredient);
  }
}
