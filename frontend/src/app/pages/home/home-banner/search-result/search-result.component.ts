import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent implements OnInit, OnDestroy {
  searchResults: Set<{ obj: any, app: any }>;
  subject: BehaviorSubject<{ set: Set<{ obj: any, app: any }>, searchTerm: string }>;
  subscription: Subscription;
  searchTerm = '';

  constructor(
    private navParams: NavParams,
    private popoverController: PopoverController
  ) { }

  ngOnInit() {
    this.subject = (this.navParams.data as any).searchResults.resultsSubject;
    this.searchTerm = (this.navParams.data as any).searchTerm;
    this.subscription = this.subject.subscribe((data: { set: Set<{ obj: any, app: any }>, searchTerm: string }) => {
      this.searchResults = data.set;
      this.searchTerm = data.searchTerm;
      this.fixDescriptionHeight();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  get amountOfResults(): string {
    return this.searchResults.size.toString();
  }

  getRouterLinkOfResult(result: object): [string, string] {
    if (this.isProduct(result)) {
      return ['/product-details/', (result as any)._id];
    } else {
      return ['/subcategory/', (result as any).slug];
    }
  }

  isProduct(result: object): boolean {
    return (result.hasOwnProperty('seller'));
  }

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
