import {Component, Input, OnInit} from '@angular/core';

/**
 * A component to display the rating stars
 */
@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent {
  /**
   * The number of filled stars
   */
  @Input() rating: number;
  /**
   * The rating floored to the next .5 step
   */
  flooredRating;
  /**
   * The rating ceiled to the next number
   */
  ceiledRating;

/**
 * Assings the calculated numbers to the variables
 */
  ngOnInit() {
    this.flooredRating = this.rating - (this.rating % 0.5);
    this.ceiledRating = Math.ceil(this.flooredRating);

  }
}
