import {Component} from '@angular/core';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.scss']
})
export class ReceiptComponent {
  basicTaxRate = 10;
  importedTaxRate = 5;

  calculateTax(input: any[]): { items: any[], salesTaxes: number, total: number } {
    const itemsList:any[] = [];
    let salesTaxes = 0;
    let totalPrice = 0;

    return {items: itemsList, salesTaxes, total: totalPrice};
  }

  roundUp(price: number): number {
    return 0;
  }
}
