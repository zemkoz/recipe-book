import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/model/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('form', { static: false })
  private form!: NgForm;

  private shoppingItemEditingSubscription?: Subscription;
  private editedItemIndex?: number;
  private editedItem?: Ingredient;

  isInEditMode = false;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit(): void {
    this.shoppingItemEditingSubscription = this.shoppingListService.startedEditing.subscribe((index: number) => {
      this.editedItemIndex = index;
      this.isInEditMode = true;
      this.editedItem = this.shoppingListService.getIngredient(index);
      this.form.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      });
    });
  }

  ngOnDestroy(): void {
    this.shoppingItemEditingSubscription?.unsubscribe();
  }

  onSaveItem(): void {
    const ingredient: Ingredient = {
      name: this.form.value.name,
      amount: this.form.value.amount
    };

    if (this.isInEditMode) {
      if (this.editedItemIndex == null) {
        throw Error('The edited shopping item missing.');
      }
      this.shoppingListService.updateIngredient(this.editedItemIndex, ingredient);
      this.clearForm();
    } else {
      this.shoppingListService.addIngredient(ingredient);
    }
  }

  onDeleteItem(): void {
    if (this.isInEditMode) {
      if (this.editedItemIndex == null) {
        throw Error('The edited shopping item missing.');
      }
      this.shoppingListService.deleteIngredient(this.editedItemIndex);
    }
  }

  clearForm(): void {
    this.isInEditMode = false;
    this.form.reset();
  }
}
