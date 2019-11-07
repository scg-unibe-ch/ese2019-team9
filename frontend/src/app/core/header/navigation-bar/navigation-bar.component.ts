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

  constructor(
      private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.categoryService.getCategories().subscribe(data => {
      // @ts-ignore
      this.categories = data.categories;
    });
  }

  segmentChanged(ev: any) {
    this.categoryService.getSingleCategoryFromSlug(ev.detail.value)
        .subscribe(data => {
          // @ts-ignore
          this.currentMenuSubcategories = data.categories[0].subcategories.sort((a, b) => a.name.localeCompare(b.name));
        });
    this.menuVisible = true;
  }

  dismissMenu() {
    this.menuVisible = false;
  }

  /*
  const popover = await this.popoverController.create({
      component: CategoryMenuComponent,
      componentProps: { subcategories: this.currentMenuSubcategories},
      translucent: true,
      backdropDismiss: true,
      cssClass: 'subcategoryMenuPopover'
    });
    return await popover.present();
   */
}
