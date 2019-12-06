import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellingPage } from './selling.page';

describe('SellingPage', () => {
  let component: SellingPage;
  let fixture: ComponentFixture<SellingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
