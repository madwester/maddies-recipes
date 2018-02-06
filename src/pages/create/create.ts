import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { storage, initializeApp } from 'firebase';

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
  
  constructor(private camera: Camera, public navCtrl: NavController, public navParams: NavParams) {
    initializeApp(FIREBASE_CONFIG);
  }
  
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
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatePage');
  }
}
