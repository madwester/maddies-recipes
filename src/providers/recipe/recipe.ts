import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import {  Recipe } from '../../models/recipe-model';

/*
  Generated class for the RecipeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RecipeProvider {
  constructor(public http: HttpClient) {
    console.log('Hello RecipeProvider Provider');
  }
  //my function is a member of this class so adding it inside
  AddRecipe() {
    
  }
}

