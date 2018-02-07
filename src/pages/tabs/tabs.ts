import { Component } from '@angular/core';

import { RecipesPage } from '../recipes/recipes';
import { CreatePage } from '../create/create';
import { LoginPage } from '../login/login';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ProfilePage;
  tab2Root = RecipesPage;
  tab3Root = CreatePage;
  tab4Root = LoginPage;
  
  constructor() {
  }
}
