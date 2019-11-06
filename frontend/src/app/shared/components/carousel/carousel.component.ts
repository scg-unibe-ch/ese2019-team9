import {Component, Input, OnInit} from '@angular/core';
import {CategoryService} from '../../../core/services/categoryService/category.service';
import {Platform} from '@ionic/angular';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  @Input() carouselName: string;
  @Input() categoryCarousel?: any[];
  @Input() productCarousel?: any[];
  @Input() carouselSlug: string;
  @Input() startingCarouselSize: number;

  constructor(
      private categoryService: CategoryService,
      private platform: Platform
  ) { }
  carouselItems = [];
  carouselStartingIndex = 0;
  carouselSize;
  itemsToDisplay = [];
  // Designated link if clicked on carouselItem
  routerLink: string;

  /*
      Select the size of the categoryCarousel based on screen size
   */
  selectCarouselSize() {
    if (window.innerWidth >= 768) {
      this.carouselSize = this.startingCarouselSize;
    } else {
      this.carouselSize = 3;
    }
  }
  /*
      Prepares the size and content of carousel
   */
  prepareCarousel() {
    this.carouselItems = [];
    // checks if the carousel should be a category carousel and prepares it
    if (this.categoryCarousel && this.categoryCarousel.length >= 0) {
      this.selectCarouselSize();
      this.routerLink = '/subcategory/';
      for (let i = 0; i < this.categoryCarousel.length; i++) {
        for (let j = 0; j < this.categoryCarousel[i].length; j++) {
          this.carouselItems.push(this.categoryCarousel[i][j]);
        }
      }
    }
    /*  Checks if the carousel should be a product carousel and prepares it.
        Note: the function selectCarouselSize() is not called since the product carousel has only size 1
     */
    if (this.productCarousel && this.productCarousel.length >= 0) {
      // Set the carouselSize directly since this will not change relative to screen size
      this.carouselSize = this.startingCarouselSize;
      this.routerLink = '/product-details/';
      for (let i = 0; i < this.productCarousel.length; i++) {
        this.carouselItems.push(this.productCarousel[i]);
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

  /*
      Selects the next carouselItem to be displayed
   */
  selectNextItem() {
    this.carouselStartingIndex++;
    this.selectCarouselItems(this.carouselSize, this.carouselStartingIndex);
  }

  /*
      Selects the previous carouselItem to be displayed
   */
  selectPreviousItem() {
    // Reset carouselStartingIndex once carousel reaches end of subCategories
    if ((this.carouselStartingIndex % this.carouselItems.length) === 0) {
      this.carouselStartingIndex = 0;
    }
    // Assures this.carouselStartingIndex >= 0
    if (this.carouselStartingIndex === 0) {
      this.carouselStartingIndex = this.carouselItems.length;
    }
    this.carouselStartingIndex--;
    this.selectCarouselItems(this.carouselSize, this.carouselStartingIndex );
  }

  /*
      Selects carouselItems to be currently displayed from all carouselItems
   */
  selectCarouselItems(carouselSize, startingIndex) {
    this.itemsToDisplay = [];
    /* checks for amount of carousel categories,
        if true: all categories are displayed,
        if false: 3 categories get chosen to be displayed
     */
    if (this.carouselItems.length < carouselSize) {
      this.itemsToDisplay = this.carouselItems;
    } else {
      for (let i = startingIndex; i < (carouselSize + startingIndex); i++) {
        this.itemsToDisplay.push(this.carouselItems[i % (this.carouselItems.length)]);
      }
    }
  }
}
