import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInformationComponent } from './user-information.component';

describe('UserInformationComponent', () => {
  let component: UserInformationComponent;
  let fixture: ComponentFixture<UserInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInformationComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
