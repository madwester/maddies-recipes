import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ImageService } from '../../services/image/image.service';
import { Recipe } from '../../models/recipe-model';
import { RecipesService } from '../../services/recipes/recipes.service';
import { ToastService } from '../../services/toast/toast.service';


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
  
  constructor(private camera: Camera, 
  public navCtrl: NavController, 
  public navParams: NavParams, 
  public imageService: ImageService, 
  private recipeService: RecipesService,
  private toast: ToastService) {}

  photo(){
    this.imageService.takePhoto();
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatePage');
  }
  
  addRecipe(recipe: Recipe){
    this.recipeService.addRecipe(recipe).then(ref => {
      this.toast.show(`${recipe.title} has been added!`);
      this.navCtrl.setRoot('RecipesPage', { key: ref.key })
    });
  }

}
