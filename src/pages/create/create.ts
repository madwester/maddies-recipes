import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ImageService } from '../../services/image/image.service';
import { Recipe } from '../../models/recipe-model';
import { RecipesService } from '../../services/recipes/recipes.service';
import { ToastService } from '../../services/toast/toast.service';
import firebase from 'firebase';


@IonicPage()
@Component({
  selector: 'page-create',
  templateUrl: 'create.html',
})
export class CreatePage {
  
  //imageFile: Promise<any>;
  
  recipe: Recipe = {
    title: '',
    notes: '',
    ingredients: ''
  }
  
  picdata:any
  picurl:any //source in html
  mypicref:any
  
  
  constructor(private camera: Camera, 
  public navCtrl: NavController, 
  public navParams: NavParams, 
  public imageService: ImageService, 
  private recipeService: RecipesService,
  private toast: ToastService) {
    this.mypicref=firebase.storage().ref('/')
  }

  takepic(){
    this.camera.getPicture({
      quality: 100,
      destinationType:this.camera.DestinationType.DATA_URL,
      sourceType:this.camera.PictureSourceType.CAMERA, //photolibrary here if you wanna pic photo
      encodingType:this.camera.EncodingType.PNG,
      saveToPhotoAlbum:true
      }).then(imagedata => {
        this.picdata=imagedata;
        this.upload()
      })
  }

//uploading photo to firebase
  upload(){
    this.mypicref.child(this.uid()).child('pic.png')//creating a new id in function downthere
    .putString(this.picdata,'base64',{contentType:'image/png'})
    .then(savepic => {
      this.picurl = savepic.downloadURL
    })
  }
  
  uid() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx'.replace(/[xy]/g, function (c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
  }

  /*photo(){
    this.imageFile = this.imageService.takePhoto();
  }*/
  
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
