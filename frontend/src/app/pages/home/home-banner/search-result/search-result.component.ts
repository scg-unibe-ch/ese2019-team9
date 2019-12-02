import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent implements OnInit, OnDestroy {


  searchResults: Set<{obj: any, app: any}>;
  subject: BehaviorSubject<{set: Set<{obj: any, app: any}>, searchTerm: string}>;
  subscription: Subscription;
  searchTerm: string = '';

  constructor(private navParams: NavParams) { }

  ngOnInit() {
    this.subject = (this.navParams.data as any).searchResults.resultsSubject;
    this.searchTerm =  (this.navParams.data as any).searchTerm;
    this.subscription = this.subject.subscribe((data: {set: Set<{obj: any, app: any}>, searchTerm: string})=> {
      this.searchResults = data.set;
      this.searchTerm = data.searchTerm;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  get amountOfResults(): string {
    return this.searchResults.size.toString();
  }

  getRouterLinkOfResult(result: object) {
    if (this.isProduct(result)) {
      return ['/product-details/', (result as any)._id];
    }else {
      return ['/subcategory/', (result as any).slug];
    }
  }

  showExtract(result: {obj: any, app: Map<string, number[]>}) {
    const obj = result.obj;
    const app = result.app;
    const firstFieldname = app.keys().next().value;
    if (firstFieldname === 'name'){
      return '';
    }
    return obj[firstFieldname];
  }

  isProduct(result: object): boolean{
    return (result.hasOwnProperty('seller'));
  }

  getName(result:  {obj: any, app: Map<string, number[]>}, row: any) {
    const product = result.obj;
    const rowEl: HTMLIonRowElement = row.el;
    const app = result.app;
    const res = document.createElement('span');
    const name: string = product['name'];

    if (app.has('name')){
      const firstApp = app.get('name')[0];
      const wordBegin = name.lastIndexOf(' ', firstApp);
      const wordEnd = name.indexOf(' ', firstApp);
      const firstPart = (wordBegin > 0) ? name.substring(0, wordBegin) : '';
      const highlightedPart =  (wordEnd >= name.length) ? name.substring(wordBegin) : name.substring(wordBegin, wordEnd);
      const lastPart =  (wordEnd >= name.length) ? '' : name.substring(wordEnd);
      res.innerHTML = `${firstPart}<strong>${highlightedPart}</strong>${lastPart}`;
    }else {
      res.innerHTML = name;
    }
    Array.from(rowEl.children).forEach((child)=> {
      rowEl.removeChild(child);
    });
    rowEl.appendChild(res);
  }

  getDescription(result:  {obj: any, app: Map<string, number[]>}, row: any) {
    const product = result.obj;
    const rowEl: HTMLIonRowElement = row.el;
    const app = result.app;
    const res = document.createElement('span');
    const desc: string = product.description;

    if (app.has('description')){
      const allSplits = desc.split(' ');
      const firstApp = app.get('description')[0];
      const wordBegin = desc.lastIndexOf(' ', firstApp);
      const wordEnd = desc.indexOf(' ', firstApp);
      const word = desc.substring(wordBegin, wordEnd);
      let wordIndex;
      allSplits.forEach((value, index) => {
        if (value.toLocaleLowerCase().trim() == word.toLocaleLowerCase().trim()){
          wordIndex = index;
        }
      })
      const firstPart = (wordBegin > 0) ? ((wordIndex> 10) ? `... ${desc.substring(desc.lastIndexOf(' ',wordBegin-1), wordBegin)}` : desc.substring(0, wordBegin)) : '';
      const highlightedPart = word;
      const lastPart =  (wordEnd >= desc.length) ? '' : desc.substring(wordEnd);
      res.innerHTML = `${firstPart}<strong>${highlightedPart}</strong>${lastPart}`;
    }else {
      res.innerHTML = desc;
    }

    Array.from(rowEl.children).forEach((child)=> {
      rowEl.removeChild(child);
    });
    res.style.maxHeight = '2.2em';
    res.style.fontSize = '0.8em';
    res.style.webkitLineClamp = '3';
    res.style.webkitBoxOrient = 'vertical';
    res.style.overflow = 'hidden';
    res.style.display = '-webkit-box';
    res.style.textOverflow = '-o-ellipsis-lastline';
    rowEl.appendChild(res);
  }
}
