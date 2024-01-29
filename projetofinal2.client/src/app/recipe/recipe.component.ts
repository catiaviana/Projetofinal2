import { Component, type OnInit, Input, Output, EventEmitter } from '@angular/core'
import { type RecipeList } from '../recipe-list'

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent implements OnInit {
  @Input() categoryList: RecipeList[] = []
  results: RecipeList [] = []
  @Output() selectedCategoryEvent = new EventEmitter<RecipeList>()

  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor () { }

  ngOnInit (): void {

  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  searchListRecipes (searchText: string) {
    if (searchText.length === 0) return

    this.results = this.categoryList
      .filter(
        category => category.category.toLowerCase().includes(searchText.toLowerCase())
      )
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  selectRecipeList (category: RecipeList) {
    this.selectedCategoryEvent.emit(category)
  }
}
