import {Component, OnInit, ViewChild} from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './core/services/authService/auth.service';
import {CategoryService} from './core/services/categoryService/category.service';

/**
 * The root component of our app.
 */
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  /**
   * The side menu.
   */
  @ViewChild('menu', {static: false}) menu;

  /**
   * An array of all categories
   */
  categories = [];

  /**
   * An array of all subcategories belonging to the seleceted category
   */
  currentMenuSubcategories = [];

  /**
   * A booloean if a submenu is opened
   */
  subMenuOpen = false;

  /**
   * Assigns new private variables and calls {@link #initializeApp}
   * @param platform Auto injected Platform variable to check whether the platform is ready
   * @param splashScreen Auto injected SplashScreen variable
   * @param statusBar Auto injected StatusBar variable
   * @param authService Auto injected AuthService variable to check what buttons to display in the menu
   * @param categoryService Auto injected CategoryService variable to fetch all categories from the backend
   */
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService,
    private categoryService: CategoryService
  ) {
    this.initializeApp();
  }

  /**
   * When the platform is ready hide the splashScreen and use the default statusBar
   */
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  /**
   * Fetches all the categories from the backend and assings it to the {@link #categories} variable
   */
  ngOnInit() {
    this.categoryService.getCategories().subscribe(data => {
      // @ts-ignore
      this.categories = data;
    });
  }

  /**
   * Shows the Submenu of a given Category in alphabetical order and hides all other.
   * @param category the category to display the submenu on
   */
  showSubMenu(category) {
    if (this.subMenuOpen && !category.showMenu) {
      for (const category of this.categories) {
        category.showMenu = false;
      }
      this.subMenuOpen = false;
    }
    const slug = category.slug;
    if (category.showMenu) {
      category.showMenu = false;
      this.currentMenuSubcategories = [];
    } else if (!category.showMenu) {
      this.currentMenuSubcategories = this.categories.filter(cat => cat.slug === slug)[0].subcategories
          .sort((a, b) => a.name.localeCompare(b.name));
      category.showMenu = true;
      this.subMenuOpen = true;
    }
  }

  /**
   * Hides the submenu and dismisses the Menu
   * @param category the category which has to be closed
   */
  subMenuItemClicked(category) {
    this.currentMenuSubcategories = [];
    category.showMenu = false;
    this.dismissMenu();
  }

  /**
   * Closes the menu
   */
  dismissMenu() {
    this.menu.close();
  }
}


