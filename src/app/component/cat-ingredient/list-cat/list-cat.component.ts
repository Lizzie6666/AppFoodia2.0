import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { IngredientCategory } from '../../../model/ingredient-category';
import { IngredientCategoryService } from '../../../service/ingredient-category.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { IngreCatDialogComponent } from './ingre-cat-dialog/ingre-cat-dialog.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-list-cat',
  templateUrl: './list-cat.component.html',
  styleUrl: './list-cat.component.css'
})
export class ListCatComponent implements OnInit, AfterViewInit {
  lista: IngredientCategory[] = [];
  displayedColumns = ['id', 'name', 'accion01', 'accion02'];
  dataSource = new MatTableDataSource<IngredientCategory>(); // Asegúrate de inicializar correctamente
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private ingredientService: IngredientCategoryService, private router: Router, private dialog: MatDialog) {
    console.log("Load Constructor");
  }

  ngOnInit(): void {
    this.ingredientService.list().subscribe(data => {
      this.dataSource.data = data;
    });
    // me suscribo
    this.ingredientService.getList().subscribe(data => {
      this.dataSource.data = data;
    });
  }

  openDialog(id: number) {
    const dialogRef = this.dialog.open(IngreCatDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.delete(id);
      } else {
        console.log("FALSE");
      }
    });
  }

  delete(id: number) {
    this.ingredientService.delete(id).subscribe(() => {
      this.ingredientService.list().subscribe(data => {
        this.ingredientService.setList(data);
      });
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  filtrar(e: any) {
    this.dataSource.filter = e.target.value.trim().toLowerCase();
  }
}
