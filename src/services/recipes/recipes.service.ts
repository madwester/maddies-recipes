import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import { Recipe } from '../../models/recipe-model';

@Injectable()
export class RecipesService {
    
    private recipesRef = this.db.list<Recipe>
    ('recipe-list'); //recipe-list will be the name of the list of items in firebase db
    
    
    constructor(private db: AngularFireDatabase){

    }
    
    getRecipes(){
        return this.recipesRef;
    }
    
    addRecipe(recipe: Recipe){
        return this.recipesRef.push(recipe);
    }
}