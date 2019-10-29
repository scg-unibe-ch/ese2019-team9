import {Component, Input, OnInit} from '@angular/core';
import {CategoryService} from '../../../core/services/categoryService/category.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  @Input() catName: string;
  @Input() catSubcategories: any[];

  constructor(
      private categoryService: CategoryService
  ) { }
  categories = [];
  carouselStartingIndex = 0;
  carouselSize = 3;
  itemsToDisplay = [];

  ngOnInit() {
    for (let i = 0; i < this.catSubcategories.length; i++) {
      this.categories.push(this.catSubcategories[i]);
    }
    console.log(this.categories);
    this.selectCarouselItems(this.carouselSize, 0);
  }

  selectNextItem() {
    this.carouselStartingIndex++;
    this.selectCarouselItems(this.carouselSize, this.carouselStartingIndex);
  }

  selectPreviousItem() {
    this.carouselStartingIndex--;
    this.selectCarouselItems(this.carouselSize, this.carouselStartingIndex );
  }

  selectCarouselItems(carouselSize, startingIndex) {
    this.itemsToDisplay = [];
    for (let i = startingIndex; i < (carouselSize + startingIndex); i++) {
      this.itemsToDisplay.push(this.categories[i % (this.categories.length)]);
    }
  }
}
