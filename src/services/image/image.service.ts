import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { storage } from 'firebase';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Injectable()
export class ImageService {

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
    const imageName = 'pictures' + (new Date().getTime());  //this will give it an unique id
    const pictures = storage().ref(imageName);
    pictures.putString(image, 'data_url');
    } 
    catch (e) {
      console.error(e);
    }
  }
}
