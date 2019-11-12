import {Component, OnInit, ViewChild} from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './core/services/authService/auth.service';
import {CategoryService} from './core/services/categoryService/category.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('menu', {static: false}) menu;

  categories = [];
  currentMenuSubcategories = [];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private auth: AuthService,
    private categoryService: CategoryService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    this.categoryService.getCategories().subscribe(data => {
      // @ts-ignore
      this.categories = data;
    });
  }

  showSubMenu(category) {
    const slug = category.slug;
    if (category.showMenu) {
      category.showMenu = false;
      this.currentMenuSubcategories = [];
    } else if (!category.showMenu) {
      this.currentMenuSubcategories = this.categories.filter(cat => cat.slug === slug)[0].subcategories
          .sort((a, b) => a.name.localeCompare(b.name));
      category.showMenu = true;
    }
  }

  subMenuItemClicked(category) {
    this.currentMenuSubcategories = [];
    category.showMenu = false;
    this.menu.close();
  }
}


