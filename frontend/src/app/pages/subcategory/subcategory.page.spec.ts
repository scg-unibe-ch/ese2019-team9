import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoryPage } from './subcategory.page';

describe('SubcategoryPage', () => {
  let component: SubcategoryPage;
  let fixture: ComponentFixture<SubcategoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcategoryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
