import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/model/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput!: ElementRef;
  @ViewChild('amountInput') amountInput!: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit(): void {
  }

  onAddItem(): void {
    const name = this.nameInput.nativeElement.value;
    const amount = this.amountInput.nativeElement.value;

    const ingredient: Ingredient = { name, amount };
    this.ingredientAdded.emit(ingredient);
  }
}
