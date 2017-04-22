/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SearchInstanceComponent } from './search-instance.component';

describe('SearchInstanceComponent', () => {
  let component: SearchInstanceComponent;
  let fixture: ComponentFixture<SearchInstanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchInstanceComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchInstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});