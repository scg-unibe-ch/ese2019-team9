import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductService} from '../../../../core/services/productService/product.service';
import {ProgressIndicatorService} from '../../../../core/services/progressIndicatorService/progress-indicator.service';

@Component({
  selector: 'app-user-products-information',
  templateUrl: './user-products-information.component.html',
  styleUrls: ['./user-products-information.component.scss'],
})
export class UserProductsInformationComponent implements OnInit {
  @Output() reloadEvent = new EventEmitter<string>();
  @Input() product;
  keysToName: Map<string, string> = new Map([
    ['_id', 'Id']
  ]);
  productKeys = [];
  valuesToHide = ['seller'];

  constructor(
      private productService: ProductService,
      private progressIndicatorService: ProgressIndicatorService
  ) { }

  ngOnInit() {
    this.productKeys = Object.keys(this.product).filter(value => this.valuesToHide.indexOf(value) === -1);
  }

  getKeyString(key: string): string {
    return (this.keysToName.has(key)) ? this.keysToName.get(key) : key.charAt(0).toUpperCase() + key.slice(1);
  }

  getValueString(key: string) {
    return this.product[key.toString()];
  }

  onClickDeleteProduct(productId: string) {
    this.productService.deleteProduct(productId).subscribe(data => {
      this.progressIndicatorService.presentToast('Product successfully deleted', 2000, 'success');
      this.reloadEvent.next('reload');
    }, err => {
      console.log(err);
      this.progressIndicatorService.presentToast('Product could not be deleted', 2000, 'danger');
    });
  }
}
