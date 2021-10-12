import {Component, OnInit} from '@angular/core'
import { Recipe } from './recipe.model'
import { RecipeService } from '../shared/recipeService.service'

@Component({
    selector : 'app-recipes',
    templateUrl : './recipes.component.html',
    styleUrls : ['./recipes.component.css'],
    providers : [RecipeService]
})
export class RecipesComponent implements OnInit{
    selectedRecipeItem : Recipe = null
    
    constructor(private recipeService : RecipeService){}

    ngOnInit(){
        this.recipeService.recipeSelected.subscribe(
            (recipe : Recipe) =>{
                if(recipe){
                    this.selectedRecipeItem = recipe
                }
            }
        )
    }
}