import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../services/categoryService/category.service';

@Component({
  selector: 'app-bottom-header',
  templateUrl: './bottom-header.component.html',
  styleUrls: ['./bottom-header.component.scss'],
})
export class BottomHeaderComponent implements OnInit {
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
