import {Component, Input, OnInit} from '@angular/core';
import {CategoryService} from '../../../services/categoryService/category.service';

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.scss'],
})
export class CategoryMenuComponent implements OnInit {
  @Input() subcategories: [];

  constructor(
      private categoryService: CategoryService
  ) { }

  ngOnInit() {}
}
