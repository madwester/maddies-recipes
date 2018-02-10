import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { DataProvider } from '../../providers/data/data';
import { storage } from 'firebase';
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
  
  title: string;
  notes: string;
  ingredients: string;
  
  constructor(private camera: Camera, public navCtrl: NavController, public navParams: NavParams, public provider: DataProvider) {
    
}

  photo(){
    this.provider.takePhoto();
  }
   
  create(){
    this.provider.createRecipe(this.title, this.ingredients, this.notes);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatePage');
  }

}
