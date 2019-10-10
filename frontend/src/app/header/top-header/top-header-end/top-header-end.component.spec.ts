import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopHeaderEndComponent } from './top-header-end.component';

describe('TopHeaderEndComponent', () => {
  let component: TopHeaderEndComponent;
  let fixture: ComponentFixture<TopHeaderEndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopHeaderEndComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopHeaderEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
