import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent implements OnInit{
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goToIngredients() {
    this.router.navigate(['/ingredient/list']);
  }
}
