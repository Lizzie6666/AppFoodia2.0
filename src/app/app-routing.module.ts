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
import { CreateEditRecipeComponent } from './component/recipe/create-edit-recipe/create-edit-recipe.component';
import { LoginComponent } from './component/login/login.component';
import { AuthGuardGuard } from './security/auth-guard.guard';
import { SignUpComponent } from './component/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path:'sign-up',component:SignUpComponent
  },
  {
    path:'recipe',component:RecipeComponent,
    children:[
      {
        path:'list',component:RecipeListComponent
      },
      {
        path:'create-edit',component:CreateEditRecipeComponent, canActivate: [AuthGuardGuard]
      },
      {
        path:'create-edit/:id',component:CreateEditRecipeComponent, canActivate: [AuthGuardGuard]
      }
    ]
    
  },
  {
    path:'home', component:HomeComponent
  },
  {
    path:'community',component:CommunityComponent,
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
        path:'nuevo',component:CreateEditComponent, canActivate: [AuthGuardGuard]
      }
      ,
      {
        path:'edit',component:CreateEditComponent, canActivate: [AuthGuardGuard]
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
