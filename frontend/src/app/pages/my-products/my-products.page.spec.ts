import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProductsPage } from './my-products.page';

describe('MyProductsPage', () => {
  let component: MyProductsPage;
  let fixture: ComponentFixture<MyProductsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProductsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProductsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
