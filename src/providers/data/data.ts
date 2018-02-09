import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import firebase from 'firebase';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  constructor() {}

  createRecipe(title: string, ingredients: string, notes: string): void {
    const recipeRef: firebase.database.Reference = firebase.database().ref(`/recipe1/`);
    recipeRef.set({
      title, 
      ingredients,
      notes
    })
  }

}
