import {Component, Input} from '@angular/core';

/**
 * The dropdown menu of the {@link NavigationBarComponent}
 */
@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.scss'],
})
export class CategoryMenuComponent {
  /**
   * An array with all given subcategories
   */
  @Input() subcategories: [];

  /**
   * Auto injected Service
   * @param categoryService auto injected `CategoryService`
   */
  constructor(
  ) { }

}
