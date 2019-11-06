import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../services/categoryService/category.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent implements OnInit {
  categories = [];

  constructor(
      private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.categoryService.getCategories().subscribe(data => {
      // @ts-ignore
      this.categories = data.categories;
    });
  }

}
