import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

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
  
  image: string;
  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  
  constructor(private camera: Camera, public navCtrl: NavController, public navParams: NavParams) {
  }
  
  //tsconfig.json, had to change target to es6
  async takePicture(): Promise<any>{
    try{
      this.image = await this.camera.getPicture(this.options);
    }
    catch(e){
      console.log(e);
    }
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatePage');
  }
}
