import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { ManageOffersComponent } from './manage-offers/manage-offers.component';
import { isUndefined } from 'util';

/**
 * The Admin Panel consisting of three tabs
 */
@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage {

  /**
   * The currently selected tab
   */
  selectedTab = -1;
  /**
   * The delete Offers Component of the page
   */
  private deleteOffersComponent;
  /**
   * The manage offers component query list
   */
  @ViewChildren(ManageOffersComponent) deleteOffersComponentQueryList: QueryList<ManageOffersComponent>;

  /**
   * Selects the default tab and loads the products as soon as the delete offers component is defined
   */
    ngAfterViewInit() {
      this.selectedTab = 0;
      this.deleteOffersComponentQueryList.changes.subscribe((components: QueryList<ManageOffersComponent>) => {
        this.deleteOffersComponent = components.first;
        this.updateProducts();
      });
    }

    /**
     * Switches to a new tab an reload it's data
     * @param evt The change event containing the new tab value
     */
    onTabSwitch(evt: CustomEvent) {
        const id = parseInt(evt.detail.value, 10);
        this.selectedTab = id;
        if (id === 0) {
            this.updateProducts();
      }
    }

    /**
     * Updates the products
     */
    updateProducts() {
      if (isUndefined(this.deleteOffersComponent)) { return; }
      this.deleteOffersComponent.updateProducts();
    }
}
