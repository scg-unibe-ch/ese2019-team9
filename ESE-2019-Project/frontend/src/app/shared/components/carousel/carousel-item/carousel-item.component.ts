import {Component, Input, OnInit} from '@angular/core';

/**
 * The item of a carousel {@link CarouselComponent}
 */
@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.scss'],
})
export class CarouselItemComponent implements OnInit {
  /**
   * The name of the item to be displayed
   */
  @Input() name: string;
  /**
   * The slug of the item
   */
  @Input() slug?: string;
  /**
   * The id of the item to be displayed
   */
  @Input() id?: number;
  /**
   * The link where the user should be redirected if the user clicks on the item
   */
  @Input() link: string;
  /**
   * The Image source of the Carousel Item
   */
  @Input() imageSrc?: string;

  /**
   * The complete Link as a string
   */
  completeLink: string;

  /**
   * Creates the complete link based on the inputs {@link #slug} and {@link #id}
   */
  ngOnInit() {
    if (this.slug) {
      this.completeLink = this.link.concat(this.slug);
    } else if (this.id) {
      this.completeLink = this.link.concat(this.id.toString());
    }
  }
}
