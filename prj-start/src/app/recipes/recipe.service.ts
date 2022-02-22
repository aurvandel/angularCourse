import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    // recipeSelected = new Subject<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Test', 
          'Just a test', 
          'https://static.onecms.io/wp-content/uploads/sites/9/2021/02/12/roast-chicken-with-chile-basil-vinaigrette-charred-broccoli-potatoes-FT-RECIPE0321.jpg',
          [
              new Ingredient('Meat', 1),
              new Ingredient('Fries', 20)
          ]),
        new Recipe('Second Test',
          'Just another recipte test',
          'https://static.onecms.io/wp-content/uploads/sites/9/2021/02/12/roast-chicken-with-chile-basil-vinaigrette-charred-broccoli-potatoes-FT-RECIPE0321.jpg',
          [
              new Ingredient('Buns', 2),
              new Ingredient('Meat', 2)
          ])
    ];

    constructor(private slService: ShoppingListService) {}

    getRecipe(id: number) {
        return this.recipes[id];
    }

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingListMethod(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }


}