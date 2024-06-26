import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient } from '@angular/common/http';
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
import { ListCommentsComponent } from './component/community/list-comments/list-comments.component';
import { SafeUrlPipe } from './safe-url.pipe';
import { LoginComponent } from './component/login/login.component';
import { TokenInterceptor } from './model/token.interceptor';
import {MatMenuModule} from '@angular/material/menu';
import { CreateCommentComponent } from './component/community/create-comment/create-comment.component';
import { ConfirmationComponent } from './component/recipe/recipe-list/confirmation/confirmation.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { UserComponent } from './component/user/user.component';
import { ListUserComponent } from './component/user/list-user/list-user.component';
import { CatIngredientComponent } from './component/cat-ingredient/cat-ingredient.component';
import { CatRecipeComponent } from './component/cat-recipe/cat-recipe.component';
import { ListCatComponent } from './component/cat-recipe/list-cat/list-cat.component';
import { IngreCatDialogComponent } from './component/cat-ingredient/list-cat/ingre-cat-dialog/ingre-cat-dialog.component';
import { CreateEditCatComponent } from './component/cat-ingredient/create-edit-cat/create-edit-cat.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

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
    CreateEditRecipeComponent,
    ListCommentsComponent,
    SafeUrlPipe,
    LoginComponent,
    CreateCommentComponent,
    ConfirmationComponent,
    SignUpComponent,
    UserComponent,
    ListUserComponent,
    CatIngredientComponent,
    CatRecipeComponent,
    ListCatComponent,
    IngreCatDialogComponent,
    CreateEditCatComponent
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
    CommonModule,
    MatMenuModule

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
