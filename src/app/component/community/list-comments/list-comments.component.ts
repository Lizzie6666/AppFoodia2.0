import { Component, OnInit } from '@angular/core';
import { Interactions } from '../../../model/interactions';
import { InteractionsService } from '../../../service/interactions.service';
import { Recipe } from '../../../model/recipe';
import { RecipeService } from '../../../service/recipe.service';

@Component({
  selector: 'app-list-comments',
  templateUrl: './list-comments.component.html',
  styleUrl: './list-comments.component.css'
})
export class ListCommentsComponent implements OnInit{
  interactions: Interactions[] = [];

  constructor(private interactionsService: InteractionsService,private recipeService:RecipeService) { }

  ngOnInit(): void {
    this.interactionsService.list().subscribe((data: Interactions[]) => {
      // Filtrar las interacciones válidas
      this.interactions = data.filter(interaction => interaction.user && interaction.user.username);
    });
  }

  getStars(score: number): number[] {
    return Array(score).fill(0);
  }



}
