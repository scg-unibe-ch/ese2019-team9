import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-products-information',
  templateUrl: './user-products-information.component.html',
  styleUrls: ['./user-products-information.component.scss'],
})
export class UserProductsInformationComponent implements OnInit {
  @Input() product;
  keysToName: Map<string, string> = new Map([
    ['_id', 'Id']
  ]);
  productKeys = [];
  valuesToHide = ['category', 'seller'];

  constructor() { }

  ngOnInit() {
    this.productKeys = Object.keys(this.product).filter(value => this.valuesToHide.indexOf(value) === -1);
  }

  getKeyString(key: string): string {
    return (this.keysToName.has(key)) ? this.keysToName.get(key) : key.charAt(0).toUpperCase() + key.slice(1);
  }

  getValueString(key: string) {
    return this.product[key.toString()];
  }
}
