import {Component} from '@angular/core';
import {Item} from "../models/item";

interface TaxItemList{
  items: any[], salesTaxes: number, total: number
}

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.scss']
})

export class ReceiptComponent {
  basicTaxRate = 10;
  importedTaxRate = 5;
  taxedItemsList :Item[] = [];
  salesTaxes = 0;
  totalPrice = 0;

  calculateTax(input: any[]): TaxItemList {
    const itemsList:any[] = [];
    return {items: itemsList, salesTaxes: this.salesTaxes, total: this.totalPrice};
  }

  roundUp(price: number): number {
    return 0;
  }
}
