import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatRecipeComponent } from './cat-recipe.component';

describe('CatRecipeComponent', () => {
  let component: CatRecipeComponent;
  let fixture: ComponentFixture<CatRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatRecipeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CatRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
