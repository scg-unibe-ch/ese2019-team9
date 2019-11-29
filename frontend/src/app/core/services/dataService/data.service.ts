import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private orderSource = new BehaviorSubject({});
  newOrders = this.orderSource.asObservable();

  constructor() { }

  changeOrders(orders: any) {
    this.orderSource.next(orders)
  }
}
