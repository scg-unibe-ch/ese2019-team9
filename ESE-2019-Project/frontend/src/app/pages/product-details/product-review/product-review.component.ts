import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../../core/services/userService/user.service';

@Component({
  selector: 'app-product-review',
  templateUrl: './product-review.component.html',
  styleUrls: ['./product-review.component.scss'],
})
export class ProductReviewComponent implements OnInit {
  @Input() review;
  user;

  constructor(
      private userService: UserService
  ) { }

  ngOnInit() {
    this.user = this.review.user;
  }

}
