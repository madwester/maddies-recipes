import { Component } from '@angular/core';

import { RecipesPage } from '../recipes/recipes';
import { CreatePage } from '../create/create';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = RecipesPage;
  tab2Root = CreatePage;
  tab3Root = LoginPage;
  tab4Root = RegisterPage;
  
  constructor() {
  }
}
