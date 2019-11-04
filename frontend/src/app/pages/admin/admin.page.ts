import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/services/productService/product.service';
import { first } from 'rxjs/operators';
import { resolve } from 'url';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  private selectedTab;
  private listOfOffers;

    constructor(private productService: ProductService) {
    }

    ngOnInit() {
      this.selectedTab = 0;
      this.selectTabDeleteOffers();
    }

    onTabSwitch(evt: CustomEvent) {
        const id = parseInt(evt.detail.value, 10);
        this.selectedTab = id;
        if (id === 0) {
            this.selectTabDeleteOffers();
        } else if (id === 1) {
            this.selectTabManageUsers();
        }
    }

    selectTabDeleteOffers() {
       this.updateProducts();
    }

    selectTabManageUsers() {
        // (Re-)load all Users from Backend
    }

    getAllProducts(){
      return new Promise((resolve, reject)=>{
        this.productService.getAllProducts().pipe(first()).subscribe(
        data => {
          resolve(data);
        },
        err => {
          reject(err);
        }
      );
    });
  }

  testAddNewProduct(){
    this.productService.addNewProduct('Hans-jakobs Wein Service', "5db9ab508c45eb001776c479", 42069).pipe(first()).subscribe(
      data => {
        this.updateProducts();
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }

  deleteOffer(productId: string) {
    console.log('Deleted product: '+ productId);
    this.productService.deleteProduct(productId).pipe(first()).subscribe(
      data => {
        console.log(data);
        this.updateProducts();
      },
      err => {
        console.log(err);
      }, 
    );
  }

  verifyOffer(productId: string) {
    console.log('Verified product: '+ productId);
    this.productService.verifyProduct(productId).pipe(first()).subscribe(
      data => {
        this.updateProducts();
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }

  updateProducts(){
    this.getAllProducts().then(data => {
      this.listOfOffers = data;
      console.log(data);
    }, err => {
      console.log(err);
    });
  }
}
