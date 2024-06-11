import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeComponent } from './component/recipe/recipe.component';
import { RecipeListComponent } from './component/recipe/recipe-list/recipe-list.component';
import { HomeComponent } from './component/home/home.component';
import { CommunityComponent } from './component/community/community.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { IngredientComponent } from './component/ingredient/ingredient.component';
import { IngredientListComponent } from './component/ingredient/ingredient-list/ingredient-list.component';
import { CreateEditComponent } from './component/ingredient/create-edit/create-edit.component';

const routes: Routes = [
  {
    path:'recipe',component:RecipeComponent,children:[
      {
        path:'list',component:RecipeListComponent
      }
    ]
    
  },
  {
    path:'home', component:HomeComponent
  },
  {
    path:'community',component:CommunityComponent
  },
  {
    path:'about-us',component:AboutUsComponent
  },
  {
    path:'ingredient',component:IngredientComponent,children:[
      {
        path:'list',component:IngredientListComponent
      },
      {
        path:'edit',component:CreateEditComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
