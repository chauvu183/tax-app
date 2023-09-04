import {Component} from '@angular/core';
import {Category} from "../models/category";
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
  salesTaxes = 0;
  totalPrice = 0;

  newItemName = '';
  newItemPrice = 0;
  isImported = false;

  exceptionCategories = [Category.BOOK, Category.FOOD, Category.MEDICAL];
  taxedItemsList: Item[] = [];

  calculateTax(input: Item[]): TaxItemList {
    if (input) {
      for (let item of input) {
        const price = item.price;
        const category = item.category;
        let tax = 0;
        if (!this.exceptionCategories.includes(<Category>category)) {
          tax += this.roundUp(price * this.basicTaxRate);
        }
        if (item.imported) {
          tax += this.roundUp(price * this.importedTaxRate);
        }

        const itemPrice = price + tax;
        item.priceWithTax = this.roundUp(itemPrice);
        this.salesTaxes += tax;
        this.totalPrice += itemPrice;
      }
      this.taxedItemsList = input;
    }

    return {
      items: this.taxedItemsList,
      salesTaxes: this.roundToTwoDecimalPlaces(this.salesTaxes),
      total: this.roundToTwoDecimalPlaces(this.totalPrice)
    };
  }

  roundUp(price: number): number {
    return Math.ceil(price * 20) / 20;
  }

  roundToTwoDecimalPlaces(value: number) {
    return Math.round(value * 100) / 100;
  }

}
