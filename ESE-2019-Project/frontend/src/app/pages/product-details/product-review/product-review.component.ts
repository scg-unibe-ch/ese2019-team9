import {Component, Input, OnInit} from '@angular/core';

/**
 * A component for one review
 */
@Component({
  selector: 'app-product-review',
  templateUrl: './product-review.component.html',
  styleUrls: ['./product-review.component.scss'],
})
export class ProductReviewComponent implements OnInit {
  /**
   * The review
   */
  @Input() review;
  /**
   * The user of the review
   */
  user;


  /**
   * Sets the {@link #user} as the user of the review creator
   */
  ngOnInit() {
    this.user = this.review.user;
  }

}
