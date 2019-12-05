import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { ManageOffersComponent } from './manage-offers/manage-offers.component';
import { isUndefined } from 'util';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  private selectedTab = -1;
  private deleteOffersComponent;
  @ViewChildren(ManageOffersComponent) deleteOffersComponentQueryList: QueryList<ManageOffersComponent>;

    constructor() {
    }

    ngOnInit(){}

    ngAfterViewInit() {
      this.selectedTab = 0;
      this.deleteOffersComponentQueryList.changes.subscribe((components: QueryList<ManageOffersComponent>) => {
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
