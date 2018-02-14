import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Recipe } from '../../models/recipe-model';
import { RecipesService } from '../../services/recipes/recipes.service';
import { RecipesPage } from '../../pages/recipes/recipes';


/**
 * Generated class for the CreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create',
  templateUrl: 'create.html',
})
export class CreatePage {
  
  recipe: Recipe = {
    title: '',
    notes: '',
    ingredients: ''
  } 
  
  constructor(private camera: Camera, public navCtrl: NavController, public navParams: NavParams, 
  public provider: DataProvider, private recipeService: RecipesService) {
    
  }

  photo(){
    this.provider.takePhoto();
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatePage');
  }
  
  addRecipe(recipe: Recipe){
    this.recipeService.addRecipe(recipe).then(ref => {
              this.navCtrl.setRoot('RecipesPage', { key: ref.key })
    });
  }

}
