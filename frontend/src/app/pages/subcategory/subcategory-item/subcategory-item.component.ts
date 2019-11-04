import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-subcategory-item',
  templateUrl: './subcategory-item.component.html',
  styleUrls: ['./subcategory-item.component.scss'],
})
export class SubcategoryItemComponent implements OnInit {
  @Input() name: string;
  @Input() id: string;
  @Input() location: string;
  @Input() rating: number;
  @Input() price: number;

  constructor() { }

  ngOnInit() {}

}
