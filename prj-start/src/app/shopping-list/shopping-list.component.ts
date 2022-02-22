import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private igChangedSub: Subscription;

  constructor(private shoppingListServe: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListServe.getIngredients();
    this.igChangedSub = this.shoppingListServe.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  onEditItem(index: number) {
    this.shoppingListServe.startedEditing.next(index);
  }

  ngOnDestroy(): void {
      this.igChangedSub.unsubscribe();
  }
}
