import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})
export class RatingComponent implements OnInit {
  @Input() rating: number;
  flooredRating;
  ceiledRating;

  constructor() { }

  ngOnInit() {
    this.flooredRating = this.rating - (this.rating % 0.5);
    this.ceiledRating = Math.ceil(this.flooredRating);

  }
}
