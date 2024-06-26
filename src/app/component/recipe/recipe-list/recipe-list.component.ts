import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Recipe } from '../../../model/recipe';
import { RecipeService } from '../../../service/recipe.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { RecipeCategory } from '../../../model/recipe-category';
import { RecipeCategoryService } from '../../../service/recipe-category.service';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent implements OnInit {
  dialogOpen = false;
  categories: RecipeCategory[] = [];
  recipes: Recipe[] = [];
  type: any[] = [
    { name: 'Vegetariano' },
    { name: 'Vegano' },
    { name: 'Omnívoro' },
    { name: 'Pescetariano' }
  ];
  dataSource = new MatTableDataSource<Recipe>();
  sortAscending = true; // Flag to track the sort order
  constructor(private recipeService: RecipeService,
     private dialog: MatDialog,
     private recipeCategoryService: RecipeCategoryService) { }

  ngOnInit(): void {
    this.recipeService.list().subscribe((data: Recipe[]) => {
      this.recipes = data;
      this.dataSource.data=data;
    });
    this.loadCategories();

  }

  toggleFavorite(recipe: Recipe): void {
    recipe.favorite = !recipe.favorite;
  }
  openDialog(id: number) {
    const dialogRef = this.dialog.open(ConfirmationComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.recipeService.delete(id).subscribe(() => {
          this.recipeService.list().subscribe(data => {
            this.recipeService.setList(data);
          });
        });
      } else {
        console.log("FALSE");
      }
    });
  }

  search(title: string): void {
    this.recipeService.search(title).subscribe((data: Recipe[]) => {
      this.recipes = data;
    });
  }
  editRecipe(recipe: Recipe) {
    
   }

  viewRecipe(recipe: Recipe): void {
    // Abrir el diálogo solo si no hay otro diálogo abierto
    if (!this.dialog.openDialogs.length) {
      const dialogRef: MatDialogRef<DialogComponent> = this.dialog.open(DialogComponent, {
        width: '600px',
        data: recipe,
      });

      dialogRef.afterClosed().subscribe(() => {
        // Aquí puedes realizar acciones después de cerrar el diálogo si es necesario
      });
    }
  }

  loadCategories(): void {
    this.recipeCategoryService.list().subscribe(data => {
      this.categories = data;
    });
  }
  listByType(type: string): void {
    this.recipeService.filterByType(type).subscribe(data => {
      this.recipes = data;

    });
  }
  listByCategory(categoryName: string): void {
    this.recipeService.listByCategory(categoryName).subscribe(data => {
      this.recipes = data;

    });
  }
  sortByTime(): void {
    this.recipes.sort((a, b) => this.sortAscending ? +a.time - +b.time : +b.time - +a.time);
    this.sortAscending = !this.sortAscending; // Toggle the sort order
  }
  
}