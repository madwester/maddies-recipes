import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Recipe } from '../../models/recipe-model';
import { RecipesService } from '../../services/recipes/recipes.service';
import { ToastService } from '../../services/toast/toast.service';

@IonicPage()
@Component({
  selector: 'page-recipe-edit',
  templateUrl: 'recipe-edit.html',
})
export class RecipeEditPage {

  recipe: Recipe;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private recipeService: RecipesService,
              private toast: ToastService) {
  }

  ionViewWillLoad() {
    this.recipe = this.navParams.get('recipe');
  }

  saveRecipe(recipe: Recipe){
    this.recipeService.editRecipe(recipe)
    .then(() => {
      this.toast.show(`${recipe.title} has succuessfully been saved!`);
      this.navCtrl.setRoot('RecipesPage');
    })
  }
  
  deleteRecipe(recipe: Recipe){
    this.recipeService.deleteRecipe(recipe)
    .then(() => {
      this.toast.show(`${recipe.title} has successfully been deleted!`);
      this.navCtrl.setRoot('RecipesPage');
    })
  }
}
