import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RecipeList } from '../recipe-list';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent implements OnInit{

  @Input() categoryList: RecipeList[] = [];
  results: RecipeList [] = [];
  @Output() selectedCategoryEvent = new EventEmitter<RecipeList>();

  constructor() { }

  ngOnInit(): void {
    
  }
  searchListRecipes(searchText: string) {
    if (!searchText) return;

    this.results = this.categoryList
    .filter(
      category => category.category.toLowerCase().includes(searchText.toLowerCase())
    )
  }
  selectRecipeList(category: RecipeList) {
    this.selectedCategoryEvent.emit(category);
  }

}
