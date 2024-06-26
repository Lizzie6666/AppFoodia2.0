import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IngredientService } from '../../../service/ingredient.service';
import { RecipeCategoryService } from '../../../service/recipe-category.service';
import { UserService } from '../../../service/user.service';
import { User } from '../../../model/user';
import { Ingredient } from '../../../model/ingredient';
import { RecipeCategory } from '../../../model/recipe-category';
import { Recipe } from '../../../model/recipe';
import { RecipeService } from '../../../service/recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { title } from 'process';


@Component({
  selector: 'app-create-edit-recipe',
  templateUrl: './create-edit-recipe.component.html',
  styleUrls: ['./create-edit-recipe.component.css']
})
export class CreateEditRecipeComponent implements OnInit {
  recipe: Recipe = new Recipe();
  recipeForm: FormGroup = new FormGroup({});
  users: User[] = [];
  ingredients: Ingredient[] = [];
  categories: RecipeCategory[] = [];
  type: any[] = [
    { name: 'Vegetariano' },
    { name: 'Vegano' },
    { name: 'Omnívoro' },
    { name: 'Pescetariano' }
  ];
  selectedImage: string | ArrayBuffer | null = null;
  edicion: boolean = false; //no es edicion
  id: number = 0;
  mensaje: string = '';
  //userId:number=0;
  constructor(
    private fb: FormBuilder,
    private ingredientService: IngredientService,
    private recipeCategoryService: RecipeCategoryService,
    private userService: UserService,
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id']; //capturando el id del listado
      this.edicion = data['id'] != null;
      this.init();
    });

    this.recipeForm = this.fb.group({
      title: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required],
      user: ['', Validators.required],
      ingredients: ['', Validators.required],
      category: ['', Validators.required],
      time: ['', Validators.required],
      type: ['', Validators.required],
      instructions: ['', Validators.required]
    });

    this.loadUsers();
    this.loadIngredients();
    this.loadCategories();
  }
  init() {
    // Dentro del método init:
    if (this.edicion) {
      this.recipeService.listById(this.id).subscribe({
        next: (data) => {
          console.log('Recipe data:', data);
          this.recipeForm = new FormGroup({
            id: new FormControl(data.id),
            title: new FormControl(data.title),
            image: new FormControl(data.image),
            description: new FormControl(data.description),
            user: new FormControl(data.user ? data.user.id : ''),
            ingredients: new FormControl(data.ingredients ? data.ingredients.map((ingredient: Ingredient) => ingredient.id) : []), // Mapea los objetos completos de los ingredientes
            category: new FormControl(data.recipeCategory ? data.recipeCategory.id : ''),
            time: new FormControl(data.time),
            type: new FormControl(data.type),
            instructions: new FormControl(data.instructions)
          });

        },
        error: (err) => {
          console.error('Error loading recipe:', err);
        }
      });
    }
  }


  onAddIngredient() { }
  onNewIngredient() { }

  loadUsers() {
    this.userService.list().subscribe(data => {
      this.users = data;
    });
  }

  loadIngredients(): void {
    this.ingredientService.list().subscribe(data => {
      this.ingredients = data;
    });
  }

  loadCategories(): void {
    this.recipeCategoryService.list().subscribe(data => {
      this.categories = data;
    });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file: File = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.selectedImage = reader.result;
        this.recipeForm.patchValue({ image: file.name }); // Aquí asignamos solo el nombre del archivo
      };
      reader.readAsDataURL(file);
    }
  }


  onSubmit() {
    this.recipe.title = this.recipeForm.value.title;
    //console.log('direccion de la imagen:' + this.recipeForm.value.image);
    this.recipe.image = 'assets/images/' + this.recipeForm.value.image;
    this.recipe.description = this.recipeForm.value.description;
    this.recipe.time = this.recipeForm.value.time;
    this.recipe.type = this.recipeForm.value.type;
    this.recipe.instructions = this.recipeForm.value.instructions;
    this.recipe.favorite = true;
    this.recipe.id = 0;
    this.recipe.ingredients = this.recipeForm.value.ingredients;
    //this.recipe.user.id = this.userId;
    this.recipe.user = this.recipeForm.value.user;
    this.recipe.recipeCategory = this.recipeForm.value.category;

    if (this.edicion) {
      this.recipe.id = this.id;  // Asegúrate de que el ID sea el correcto para la actualización
    } else {
      this.recipe.id = 0;  // Si es una nueva receta, el ID debe ser 0 o nulo
    }

    if (this.recipeForm.valid) {
      if (this.edicion) {
        this.recipeService.update(this.recipe).subscribe((data) => {
          this.recipeService.list().subscribe(data => {
            this.recipeService.setList(data);
            this.router.navigate(['recipe']);
          })
        })
      }
      else {
        this.recipeService.insert(this.recipe).subscribe({
          next: (response) => {
            console.log('Recipe created successfully!', response);
          },
          error: (error) => {
            console.error('Error creating recipe:', error);
          }
        });
      }
      this.router.navigate(['recipe']);
    } else {
      this.mensaje = "Agrege campos omitidos";
    }
  }
}
