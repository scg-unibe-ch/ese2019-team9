import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.scss'],
})
export class CarouselItemComponent implements OnInit {
  @Input() subCatName: string;
  @Input() subCatSlug: string;

  constructor(
      private router: Router
  ) { }

  ngOnInit() {}

  redirectToSubcategory() {
    this.router.navigate(['subcategory/', this.subCatSlug]);
  }
}
