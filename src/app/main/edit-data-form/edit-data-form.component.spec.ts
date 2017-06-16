/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditDataFormComponent } from './edit-data-form.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('EditDataFormComponent', () => {
  let component: EditDataFormComponent;
  let fixture: ComponentFixture<EditDataFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule  ],
      declarations: [ EditDataFormComponent ],
      providers:[]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
