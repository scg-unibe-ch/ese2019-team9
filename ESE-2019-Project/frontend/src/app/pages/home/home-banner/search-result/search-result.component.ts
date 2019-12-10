import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';
import { BehaviorSubject, Subscription } from 'rxjs';

/**
 * A component used in the popover under the searchbar
 */
@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent implements OnInit, OnDestroy {
  /**
   * All search results
   */
  searchResults: Set<{ obj: any, app: any }>;
  /**
   * The subject subscribed to, to get new searchresults while opened
   */
  subject: BehaviorSubject<{ set: Set<{ obj: any, app: any }>, searchTerm: string }>;
  /**
   * The subscription to the {@link #subject}
   */
  subscription: Subscription;
  /**
   * The current searchterm
   */
  searchTerm = '';

  /**
   * @ignore
   */
  constructor(
    private navParams: NavParams
  ) { }

  /**
   * Assignes all instance variables and displays the searchresults
   */
  ngOnInit() {
    this.subject = (this.navParams.data as any).searchResults.resultsSubject;
    this.searchTerm = (this.navParams.data as any).searchTerm;
    this.subscription = this.subject.subscribe((data: { set: Set<{ obj: any, app: any }>, searchTerm: string }) => {
      this.searchResults = data.set;
      this.searchTerm = data.searchTerm;
      this.fixDescriptionHeight();
    });
  }

  /**
   * unsubscribes on the subject
   */
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  /**
   * Returns the amount of results
   */
  get amountOfResults(): string {
    return this.searchResults.size.toString();
  }

  /**
   * returns the routerlink of the result
   * @param result the search result
   */
  getRouterLinkOfResult(result: object): [string, string] {
    if (this.isProduct(result)) {
      return ['/product-details/', (result as any)._id];
    } else {
      return ['/subcategory/', (result as any).slug];
    }
  }

  /**
   * Checks whether a searchResult is a Product or category
   * @param result the searchResult
   * @returns true if the reuslt is a product
   */
  isProduct(result: object): boolean {
    return (result.hasOwnProperty('seller'));
  }

  /**
   * Navigates to search result
   * @param result the search result
   */
  navigateTo(result: any) {
    let routerLink = this.getRouterLinkOfResult(result);
    window.open(routerLink[0] + routerLink[1], '_self');
  }

  /**
   * Get the name to display
   * @param result The search result
   * @param row the row in which to display the name
   */
  getName(result: { obj: any, app: Map<string, number[]> }, row: any) {
    const product = result.obj;
    const rowEl: HTMLIonRowElement = row.el;
    const app = result.app;
    const res = document.createElement('span');
    const name: string = product.name + ' ';

    if (app.has('name')) {
      const firstApp = app.get('name')[0];
      const wordBegin = name.lastIndexOf(' ', firstApp);
      const wordEnd = name.indexOf(' ', firstApp);
      const firstPart = (wordBegin > 0) ? name.substring(0, wordBegin) : '';
      const highlightedPart = (wordEnd >= name.length) ? name.substring(wordBegin) : name.substring(wordBegin, wordEnd);
      const lastPart = (wordEnd >= name.length) ? '' : name.substring(wordEnd);
      res.innerHTML = `${firstPart}<strong>${highlightedPart}</strong>${lastPart}`;
    } else {
      res.innerHTML = name;
    }
    Array.from(rowEl.children).forEach((child) => {
      rowEl.removeChild(child);
    });
    rowEl.appendChild(res);
  }

  /**
   * Get the description to display
   * @param result The search result
   * @param row the row in which to display the description
   */
  getDescription(result: { obj: any, app: Map<string, number[]> }, row: any) {
    const product = result.obj;
    const rowEl: HTMLIonRowElement = row.el;
    const app = result.app;
    const res = document.createElement('div');
    const desc: string = product.description + ' ';
    const container = document.createElement('div');

    if (app.has('description')) {
      const allSplits = desc.split(' ');
      const firstApp = app.get('description')[0];
      const wordBegin = desc.lastIndexOf(' ', firstApp);
      const wordEnd = desc.indexOf(' ', firstApp);
      const word = desc.substring(wordBegin, wordEnd);
      let wordIndex;
      allSplits.forEach((value, index) => {
        if (value.toLocaleLowerCase().trim() === word.toLocaleLowerCase().trim()) {
          wordIndex = index;
        }
      });
      const firstPart = (wordBegin > 0) ? ((wordIndex > 10) ? `... ${desc.substring(desc.lastIndexOf(' ', wordBegin - 1), wordBegin)}`
        : desc.substring(0, wordBegin)) : '';
      const highlightedPart = word;
      const lastPart = (wordEnd >= desc.length) ? '' : (wordEnd + 1000 > desc.length) ?
        desc.substring(wordEnd) : desc.substring(wordEnd, wordEnd + 1000);
      res.innerHTML = `${firstPart}<strong>${highlightedPart}</strong>${lastPart}`;
    } else {
      res.innerText = desc;
    }

    Array.from(rowEl.children).forEach((child) => {
      rowEl.removeChild(child);
    });
    container.style.width = '100%';
    container.style.maxHeight = '100px';
    container.style.overflow = 'hidden';
    container.id = 'descriptionContainerId';
    container.id = 'descriptionId';
    container.appendChild(res);
    rowEl.appendChild(container);
    this.fixDescriptionHeight();
  }

  /**
   * Cuts the description to make it an ellipsis
   */
  fixDescriptionHeight() {
    const container = document.getElementById('descriptionContainerId');
    const description = document.getElementById('descriptionId');
    if (!container || !description) { return; }
    const containerHeight = container.clientHeight;
    while (description.clientHeight > containerHeight) {
      description.innerHTML = description.innerHTML.replace(/\W*\s(\S)*$/, '...');
    }
  }
}
