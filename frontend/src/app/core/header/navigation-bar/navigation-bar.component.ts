import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../services/categoryService/category.service';

/**
 * The navigation bar with the categories to select from. Opens a dropdown when clicked on with
 * the respective {@link CategoryMenuComponent subcategories as a dropdown list} 
 */
@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent implements OnInit {

  /**
   * An array to store all categories
   */
  categories = [];
  
  /**
   * Boolean handling if the dropdown menu should be visible. 
   * Set it to `true` to show the dropdown menu
   */
  menuVisible = false;

  /**
   * An array containing all subcategories of the selected category.
   * This is used as an `@Input() subcategories` on the dropdown with the {@link CategoryMenuComponent subcategories list}
   */
  currentMenuSubcategories;

  /**
   * Stores the `event` given when the segment changed. Used in {@link #dismissMenu} to reset the segment
   */
  currentEvent;

  /**
   * Assign a new private variable with the injected service
   * @param categoryService auto injected `CategoryService` to get all categories from the backend
   */
  constructor(
      private categoryService: CategoryService
  ) { }

  /**
   * Fetch all categories from the backend via the {@link CategoryService}. 
   * Store the returned categories in the {@link #categories} variable.
   */
  ngOnInit() {
    this.categoryService.getCategories().subscribe(data => {
      // @ts-ignore
      this.categories = data;
    },
    error => {
      console.log(error)
    }
    );
  }

  /**
   * Method that gets called when the selected category changed. 
   * If a new category is selected then:
   *  - Updates the {@link #currentMenuSubcategories subcategories array} with the respective subcategoryies of the new category
   *  - Sets the {@link #menuVisible} to `true` to show the dropdown menu
   * @param ev The `ionChange` event Object 
   */
  segmentChanged(ev: any) {
    if (ev.target.value === '')   {
      return;
    }
    this.currentEvent = ev;
    this.currentMenuSubcategories = this.categories.filter(cat => cat.slug === ev.detail.value)[0].subcategories
        .sort((a, b) => a.name.localeCompare(b.name));
    this.menuVisible = true;
  }

  /**
   * Dismisses the dropdown menu by setting {@link #menuVisible} to `false`.
   * 
   * Resets the selected segment item so that none is selected.
   * 
   * Empties the {@link #currentMenuSubcategories subcategories array}
   */
  dismissMenu() {
    if (this.menuVisible === false) {
      return;
    }
    this.currentEvent.target.value = '';
    this.menuVisible = false;
    this.currentMenuSubcategories = [];
  }
}
