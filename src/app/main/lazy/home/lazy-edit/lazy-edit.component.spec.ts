/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LazyEditComponent } from './lazy-edit.component';

describe('LazyEditComponent', () => {
  let component: LazyEditComponent;
  let fixture: ComponentFixture<LazyEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
