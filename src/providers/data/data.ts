import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { storage } from 'firebase';
import { Camera, CameraOptions } from '@ionic-native/camera';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  constructor(private camera: Camera, ) {}

    //tsconfig.json, had to change target to es6
  async takePhoto(){
    try{
    //defining camera options
    const options: CameraOptions = {
      quality: 50,
      targetHeight: 600,
      targetWidth: 600,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true
    }
    const result = await this.camera.getPicture(options);
    
    const image = `data:image/jpeg;base64,${result}`;   
    
    const pictures = storage().ref('pictures');
    pictures.putString(image, 'data_url');
    } 
    catch (e) {
      console.error(e);
    }
  }

  /*createRecipe(title: string, ingredients: string, notes: string): void {
    const recipeRef: firebase.database.Reference = firebase.database().ref(`/recipe1/`);
    recipeRef.set({
      title, 
      ingredients,
      notes
    })
  }*/

}
