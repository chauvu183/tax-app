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
          tax += this.roundUp(price * this.importedTaxRate);
        }

        const itemPrice = price + tax;
        itemsList.push({name: name, price: this.roundUp(itemPrice)});
        this.salesTaxes += tax;
        this.totalPrice += itemPrice;
      }
    }

    return {items: itemsList, salesTaxes: this.roundToTwoDecimalPlaces(this.salesTaxes), total: this.roundToTwoDecimalPlaces(this.totalPrice)};
  }

  roundUp(price: number): number {
    return Math.ceil(price * 20) / 20;
  }

  roundToTwoDecimalPlaces(value:number){
    return  parseFloat(value.toFixed(2))
  }

  addItem() {

  }
}
