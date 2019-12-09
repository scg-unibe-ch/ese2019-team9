import {Component, Input, OnInit} from '@angular/core';
import {CategoryService} from '../../../core/services/categoryService/category.service';
import {Platform} from '@ionic/angular';

/**
 * A component for an 'item-carousel' (Item Slideshow).
 * Consists of multiple {@link CarouselItemComponent CarouselItemComponents}
 */
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  /**
   * The name to be displayed
   */
  @Input() carouselName: string;
  /**
   *  The array of the category items to be displayed in the carousel
   */
  @Input() categoryCarousel?: any[];
  /**
   * The array of the product items to be displayed in the carousel
   */
  @Input() productCarousel?: any[];

  /**
   * The starting size of the carousel
   */
  @Input() startingCarouselSize: number;

  /**
   * The items that are in the carousel
   */
  carouselItems = [];
  /**
   * The starting index of the carousel
   */
  carouselStartingIndex = 0;

  /**
   * The current size of the carousel in number of items
   */
  carouselSize;
  /**
   * All items that should be displayed
   */
  itemsToDisplay = [];

  /**
   * The Link that where a user should be redirected to if the user clicks an item
   */
  routerLink: string;

  /**
   * @ignore
   */
  constructor(
      private platform: Platform
  ) { }

  /**
   * Selects the carousel size based on screen size
   */
  selectCarouselSize() {
    if (window.innerWidth >= 768) {
      this.carouselSize = this.startingCarouselSize;
    } else {
      this.carouselSize = 3;
    }
  }
  
  /**
   * Prepares the carousel and selects the size of it
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

  /**
   * Prepares the carousel and adds a new event listener to the resizing
   */
  ngOnInit() {
    this.prepareCarousel();
    this.platform.resize.subscribe(async () => {
      this.prepareCarousel();
    });
  }

/**
 * Select the next Carousel Item to be displayed
 */
  selectNextItem() {
    this.carouselStartingIndex++;
    this.selectCarouselItems(this.carouselSize, this.carouselStartingIndex);
  }

  /**
   * Select the previous Carousel Item to be displayed
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

  /**
   * Select all Carousel Items that should be displayed
   * @param carouselSize the size of the carousel in number of items
   * @param startingIndex the current startingIndex
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
