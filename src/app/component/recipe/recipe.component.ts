import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeCategoryService } from '../../service/recipe-category.service';
import { RecipeCategory } from '../../model/recipe-category';
import { RecipeService } from '../../service/recipe.service';
import { Recipe } from '../../model/recipe';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  showCreateEditRecipeComponent = false;
  categories: RecipeCategory[] = [];
  recipes: Recipe[] = [];
  
  constructor(
    private router: Router,
    public route: ActivatedRoute
  ) { }

  ngOnInit(): void {

  }

  goToIngredients() {
    this.router.navigate(['/ingredient/list']);
  }
  goToCatIngredients() {
    this.router.navigate(['/cat-ingredient/list']);
  }

  navigateToCreateEdit() {
    this.router.navigate(['/recipe/create-edit']);
  }




}
