import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ReceiptComponent} from './receipt.component';
import {Category} from "../models/category";
import {NO_ERRORS_SCHEMA} from "@angular/compiler";
import {AddItemComponent} from "./add-item/add-item.component";
import {FormsModule} from "@angular/forms";
import { MockComponent } from 'ng-mocks';

describe('ReceiptComponent', () => {
  let component: ReceiptComponent;
  let fixture: ComponentFixture<ReceiptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceiptComponent, MockComponent(AddItemComponent)],
      imports: [ FormsModule ],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(ReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate tax correctly for receipt 1', () => {
    const example1 = [
      {name: 'book', quantity: 1, price: 12.49, imported: false, category: Category.BOOK},
      {name: 'music CD', quantity: 1, price: 14.99, imported: false, category: Category.OTHERS},
      {name: 'chocolate bar', quantity: 1, price: 0.85, imported: false, category: Category.FOOD}
    ]
    const result = component.calculateTax(example1);

    expect(result.items.length).toBe(3);
    expect(result.salesTaxes).toBe(1.50);
    expect(result.total).toBe(29.83);
  })

  it('should calculate tax correctly for receipt 2', () => {
    const input2 = [
      {name: 'imported box of chocolates', quantity: 1, price: 10.00, imported: true, category: Category.FOOD},
      {name: 'imported bottle of perfume', quantity: 1, price: 47.50, imported: true, category: Category.OTHERS}
    ];
    const result = component.calculateTax(input2);

    expect(result.items.length).toBe(2);
    expect(result.salesTaxes).toBe(7.65);
    expect(result.total).toBe(65.15);
  });

  it('should calculate tax correctly for receipt 3', () => {
    const input3 = [
      {name: 'imported bottle of perfume', quantity: 1, price: 27.99, imported: true, category: Category.OTHERS},
      {name: 'bottle of perfume', quantity: 1, price: 18.99, imported: false, category: Category.OTHERS},
      {name: 'packet of headache pills', quantity: 1, price: 9.75, imported: false, category: Category.MEDICAL},
      {name: 'box of imported chocolates', quantity: 1, price: 11.25, imported: true, category: Category.FOOD}
    ]
    const result = component.calculateTax(input3);

    expect(result.items.length).toBe(4);
    expect(result.salesTaxes).toBe(6.70);
    expect(result.total).toBe(74.68);
  });

  it('should round to the nearest 0.05 correctly', () => {
    expect(component.roundUp(12.49)).toBe(12.50);
    expect(component.roundUp(14.99)).toBe(15.00);
    expect(component.roundUp(0.85)).toBe(0.85);
    expect(component.roundUp(10.00)).toBe(10.00);
    expect(component.roundUp(27.99)).toBe(28.00);
  });


});
