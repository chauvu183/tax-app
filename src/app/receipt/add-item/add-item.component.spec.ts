import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemComponent } from './add-item.component';
import {FormsModule} from "@angular/forms";

describe('AddItemComponent', () => {
  let component: AddItemComponent;
  let fixture: ComponentFixture<AddItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddItemComponent],
      imports: [FormsModule]
    });
    fixture = TestBed.createComponent(AddItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
