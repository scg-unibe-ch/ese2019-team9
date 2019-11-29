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
  subject: BehaviorSubject<Set<{obj: any, app: any}>>;
  subscription: Subscription;

  constructor(private navParams: NavParams) { }

  ngOnInit() {
    this.subject = (this.navParams.data as any).searchResults.resultsSubject;
    this.subscription = this.subject.subscribe((data: Set<{obj: any, app: any}>)=> {
      this.searchResults = data;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  get amountOfResults(): string {
    return this.searchResults.size.toString();
  }

  getRouterLinkOfResult(result: object) {
    console.log(result);
    console.log(result.hasOwnProperty('seller'));
    if (this.isProduct(result)) {
      return ['/product-details/', (result as any)._id];
    }else {
      return ['/subcategory/', (result as any).slug];
    }
  }

  showExtract(resultAppereance: Map<string, number[]>) {
    let res = '';
    Array.from(resultAppereance.keys()).forEach((el) => {
      res += el+', '
    });
    return res.substring(0, res.lastIndexOf(','));
  }

  isProduct(result: object): boolean{
    return (result.hasOwnProperty('seller'));
  }
}
