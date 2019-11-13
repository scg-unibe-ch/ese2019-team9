import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.scss'],
})
export class CarouselItemComponent implements OnInit {
  @Input() name: string;
  @Input() slug?: string;
  @Input() id?: number;
  @Input() link: string;
  @Input() imageSrc?: string;

  completeLink: string;

  constructor() { }

  ngOnInit() {
    if (this.slug) {
      this.completeLink = this.link.concat(this.slug);
    } else if (this.id) {
      this.completeLink = this.link.concat(this.id.toString());
    }
  }
}
