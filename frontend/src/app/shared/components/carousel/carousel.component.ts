import {Component, Input, OnInit} from '@angular/core';
import {CategoryService} from '../../../core/services/categoryService/category.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  @Input() categoryName: string;
  @Input() categorySubCategories: any[];

  constructor(
      private categoryService: CategoryService
  ) { }
  subCategories = [];
  carouselStartingIndex = 0;
  carouselSize = 3;
  itemsToDisplay = [];

  ngOnInit() {
    this.subCategories = [];
    /* add the following code once subcategories have been established
    
    for (let i = 0; i < this.categorySubCategories.length; i++) {
      for (let j = 0; j < this.categorySubCategories[i].length; j++) {
        this.subCategories.push(this.categorySubCategories[i][j]);
      }
    }
    */
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
      this.itemsToDisplay.push(this.subCategories[i % (this.subCategories.length)]);
    }
  }
}
