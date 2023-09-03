import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptComponent } from './receipt.component';

describe('ReceiptComponent', () => {
  let component: ReceiptComponent;
  let fixture: ComponentFixture<ReceiptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceiptComponent]
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
      { name: 'book', quantity: 1, price: 12.49, imported: false, exception: false },
      { name: 'music CD', quantity: 1, price: 14.99, imported: false, exception: false },
      { name: 'chocolate bar', quantity: 1, price: 0.85, imported: false, exception: false }
    ]
    const result = component.calculateTax(example1);

    expect(result.items.length).toBe(3);
    expect(result.salesTaxes).toBe(1.50);
    expect(result.total).toBe(29.83);
  })

  it('should calculate tax correctly for receipt 2', () => {
    const input2 = [
      { name: 'imported box of chocolates', quantity: 1, price: 10.00, imported: true, exception: true },
      { name: 'imported bottle of perfume', quantity: 1, price: 47.50, imported: true, exception: false }
    ];
    const result = component.calculateTax(input2);

    expect(result.items.length).toBe(2);
    expect(result.salesTaxes).toBe(7.65);
    expect(result.total).toBe(65.15);
  });

  it('should calculate tax correctly for receipt 3', () => {
    const input3 = [
      { name: 'imported bottle of perfume', quantity: 1, price: 27.99, imported: true, exception: false },
      { name: 'bottle of perfume', quantity: 1, price: 18.99, imported: false, exception: false },
      { name: 'packet of headache pills', quantity: 1, price: 9.75, imported: false, exception: true },
      { name: 'box of imported chocolates', quantity: 1, price: 11.25, imported: true, exception: true }
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
