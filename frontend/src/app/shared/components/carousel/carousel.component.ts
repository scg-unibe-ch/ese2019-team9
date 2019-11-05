import {Component, Input, OnInit} from '@angular/core';
import {CategoryService} from '../../../core/services/categoryService/category.service';
import {Platform} from '@ionic/angular';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  @Input() categoryName: string;
  @Input() categorySubCategories: any[];
  @Input() categorySlug: string;

  constructor(
      private categoryService: CategoryService,
      private platform: Platform
  ) { }
  subCategories = [];
  carouselStartingIndex = 0;
  carouselSize;
  itemsToDisplay = [];

  selectCarouselSize() {
    if (window.innerWidth >= 768) {
      this.carouselSize = 5;
    } else {
      this.carouselSize = 3;
    }
  }

  prepareCarousel() {
    this.selectCarouselSize();
    this.subCategories = [];
    for (let i = 0; i < this.categorySubCategories.length; i++) {
      for (let j = 0; j < this.categorySubCategories[i].length; j++) {
        this.subCategories.push(this.categorySubCategories[i][j]);
      }
    }
    this.selectCarouselItems(this.carouselSize, 0);
  }

  ngOnInit() {

    this.prepareCarousel();
    this.platform.resize.subscribe(async () => {
      this.prepareCarousel();
    });
  }

  selectNextItem() {
    this.carouselStartingIndex++;
    this.selectCarouselItems(this.carouselSize, this.carouselStartingIndex);
  }

  selectPreviousItem() {
    // Reset carouselStartingIndex once carousel reaches end of subCategories
    if ((this.carouselStartingIndex % this.subCategories.length) === 0) {
      this.carouselStartingIndex = 0;
    }
    // Assures this.carouselStartingIndex >= 0
    if (this.carouselStartingIndex === 0) {
      this.carouselStartingIndex = this.subCategories.length;
    }
    console.log(this.carouselStartingIndex);
    this.carouselStartingIndex--;
    this.selectCarouselItems(this.carouselSize, this.carouselStartingIndex );
  }

  selectCarouselItems(carouselSize, startingIndex) {
    this.itemsToDisplay = [];
    /* checks for amount of carousel categories,
        if true: all categories are displayed,
        if false: 3 categories get chosen to be displayed
     */
    if (this.subCategories.length < carouselSize) {
      this.itemsToDisplay = this.subCategories;
    } else {
      for (let i = startingIndex; i < (carouselSize + startingIndex); i++) {
        this.itemsToDisplay.push(this.subCategories[i % (this.subCategories.length)]);
      }
    }
  }
}
