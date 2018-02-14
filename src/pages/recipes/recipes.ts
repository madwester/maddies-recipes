import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from "../../models/user";
import { RecipesService } from '../../services/recipes/recipes.service';
import { Observable } from 'rxjs/Observable';
import { Recipe } from '../../models/recipe-model';
/**

 * Generated class for the RecipesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes.html',
})
export class RecipesPage {
  
  recipeList$: Observable<Recipe[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private recipeService: RecipesService) { 
      this.recipeList$ = this.recipeService
      .getRecipes() //this returns a DB list
      .snapshotChanges() //gives me key and value pair
      .map(
        changes => {
          return changes.map(c => ({
            key: c.payload.key, ...c.payload.val()
          }));
        });
  }

  ionViewWillLoad() {
  
  }

}

