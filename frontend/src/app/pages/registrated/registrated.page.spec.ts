import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistratedPage } from './registrated.page';

describe('RegistratedPage', () => {
  let component: RegistratedPage;
  let fixture: ComponentFixture<RegistratedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistratedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistratedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
