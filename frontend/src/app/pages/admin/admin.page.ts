import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { DeleteOffersComponent } from './delete-offers/delete-offers.component';
import { isUndefined } from 'util';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  private selectedTab = -1;
  private deleteOffersComponent;
  @ViewChildren(DeleteOffersComponent) deleteOffersComponentQueryList: QueryList<DeleteOffersComponent>;

    constructor() {
    }

    ngOnInit(){}

    ngAfterViewInit() {
      this.selectedTab = 0;
      this.deleteOffersComponentQueryList.changes.subscribe((components: QueryList<DeleteOffersComponent>) => {
        this.deleteOffersComponent = components.first;
        this.updateProducts();
      });
    }

    onTabSwitch(evt: CustomEvent) {
        const id = parseInt(evt.detail.value, 10);
        this.selectedTab = id;
        if (id === 0) {
            this.updateProducts();
        } else if (id === 1) {
            this.selectTabManageUsers();
        }
    }

    updateProducts() {
      if (isUndefined(this.deleteOffersComponent)) return;
      this.deleteOffersComponent.updateProducts();
    }

    selectTabManageUsers() {
        // (Re-)load all Users from Backend
    }

    

}
