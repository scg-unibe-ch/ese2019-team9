import {Component, Input, OnInit} from '@angular/core';

/**
 * The component representing a product on the subcategory page
 */
@Component({
  selector: 'app-subcategory-item',
  templateUrl: './subcategory-item.component.html',
  styleUrls: ['./subcategory-item.component.scss'],
})
export class SubcategoryItemComponent {
  /**
   * the name of the product
   */
  @Input() name: string;
  /**
   * Variable if the product is verified
   */
  @Input() verified: string;
  /**
   * The location of the product
   */
  @Input() location: string;
  /**
   * The id of the prduct. Used for the link
   */
  @Input() id: number;
  /**
   * The rating of the product
   */
  @Input() rating: number;
  /**
   * The price of the product
   */
  @Input() price: number;
  /**
   * The image Source of the product
   */
  @Input() imageSrc: string;

}
