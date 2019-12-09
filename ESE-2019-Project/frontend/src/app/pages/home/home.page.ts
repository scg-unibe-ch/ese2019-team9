import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../core/services/categoryService/category.service';

/**
 * The home page of themoln
 */
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  /**
   * All categories
   */
  categories = [];

  /**
   * Assigns a new private variable
   * @param categoryService Auto injected CategoryService used to fetch all categories
   */
  constructor(
      private categoryService: CategoryService
  ) {}

  /**
   * Start to fetch all categories
   */
  ngOnInit() {
    this.loadCategories();
  }

  /**
   * Load all categories from the backend
   */
  loadCategories() {
    this.categoryService.getCategories().subscribe(data => {
      // @ts-ignore
      this.categories = data;
    });
  }
}
