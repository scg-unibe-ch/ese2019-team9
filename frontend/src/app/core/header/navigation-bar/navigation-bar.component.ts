import {Component, OnInit} from '@angular/core';
import {CategoryService} from '../../services/categoryService/category.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent implements OnInit {
  categories = [];
  menuVisible = false;
  currentMenuSubcategories;
  currentEvent;

  constructor(
      private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.categoryService.getCategories().subscribe(data => {
      // @ts-ignore
      this.categories = data;
    });
  }

  segmentChanged(ev: any) {
    if (ev.target.value === '') {
      return;
    }
    this.currentEvent = ev;
    this.currentMenuSubcategories = this.categories.filter(cat => cat.slug === ev.detail.value)[0].subcategories
        .sort((a, b) => a.name.localeCompare(b.name));
    this.menuVisible = true;
  }

  dismissMenu() {
    if (this.menuVisible === false) {
      return;
    }
    this.currentEvent.target.value = '';
    this.menuVisible = false;
    this.currentMenuSubcategories = [];
  }
}
