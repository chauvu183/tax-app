import {Component} from '@angular/core';
import {Item} from "../models/item";

interface TaxItemList {
  items: any[],
  salesTaxes: number,
  total: number
}

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.scss']
})

export class ReceiptComponent {
  basicTaxRate = 0.1;
  importedTaxRate = 0.05;
  taxedItemsList: Item[] = [];
  salesTaxes = 0;
  totalPrice = 0;

  newItemName = '';
  newItemPrice = 0;
  isImported = false;
  isExempt = false;

  calculateTax(input?: any[]): TaxItemList {
    const itemsList: any[] = [];
    if (input) {
      for (let item of input) {
        const name = item.name;
        const price = item.price;
        let tax = 0;
        if (!item.exception) {
          tax += this.roundUp(price * this.basicTaxRate);
        }
        if (item.imported) {
          const importedTax = this.roundUp(price * this.importedTaxRate);
          tax = tax + importedTax;
        }

        const itemPrice = price + tax;
        itemsList.push({name: name, price: this.roundUp(itemPrice)});
        this.salesTaxes += tax;
        this.totalPrice += itemPrice;
      }
    }
    console.log(this.totalPrice);
    return {items: itemsList, salesTaxes: this.salesTaxes, total: this.roundUp(this.totalPrice)};
  }

  roundUp(price: number): number {
    return Math.ceil(price * 20) / 20;
  }

  addItem() {

  }
}
