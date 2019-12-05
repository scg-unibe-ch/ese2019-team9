import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductsPage } from './add-products.page';

describe('AddProductsPage', () => {
  let component: AddProductsPage;
  let fixture: ComponentFixture<AddProductsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
