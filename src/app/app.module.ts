import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule} from '@angular/material/table';//add
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule} from '@angular/material/input';//add
import { MatDatepickerModule } from '@angular/material/datepicker';//
import { MatNativeDateModule } from '@angular/material/core';
import { MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list'
import { HomeComponent } from './component/home/home.component';
import { CommunityComponent } from './component/community/community.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { RecipeComponent } from './component/recipe/recipe.component';
import { RecipeListComponent } from './component/recipe/recipe-list/recipe-list.component';
import { MatCardModule } from '@angular/material/card';
import{ MDCRipple} from '@material/ripple';
import { FooterComponent } from './component/footer/footer.component';
import { MatIconModule} from '@angular/material/icon';
import { withFetch } from '@angular/common/http';
import { IngredientComponent } from './component/ingredient/ingredient.component';
import { IngredientListComponent } from './component/ingredient/ingredient-list/ingredient-list.component';
import { CommonModule } from '@angular/common';
import { CreateEditComponent } from './component/ingredient/create-edit/create-edit.component';
import { DialogComponent } from './component/recipe/recipe-list/dialog/dialog.component';
import { IngredientDialogComponent } from './component/ingredient/ingredient-list/ingredient-dialog/ingredient-dialog.component';
import { CreateEditRecipeComponent } from './component/recipe/create-edit-recipe/create-edit-recipe.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CommunityComponent,
    AboutUsComponent,
    NavbarComponent,
    RecipeComponent,
    RecipeListComponent,
    FooterComponent,
    IngredientComponent,
    IngredientListComponent,
    CreateEditComponent,
    DialogComponent,
    IngredientDialogComponent,
    CreateEditRecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatSortModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatDialogModule,
    MatMomentDateModule,
    MatSelectModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    CommonModule

  ],
  providers: [
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
