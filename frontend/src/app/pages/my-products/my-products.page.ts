import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.page.html',
  styleUrls: ['./my-products.page.scss'],
})
export class MyProductsPage implements OnInit {
  selectedTab;

  constructor() { }

  ngOnInit() {
    this.selectedTab = 0;
  }

  onTabSwitch(evt: CustomEvent) {
    const id = parseInt(evt.detail.value, 10);
    this.selectedTab = id;
  }

}
