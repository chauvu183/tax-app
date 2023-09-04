import { Component } from '@angular/core';
import {Category} from "../../models/category";

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent {
  itemCategories: Category[] = Object.values(Category); // Populate the categories from the enum

  addItem(itemForm: any): void {
    if (itemForm.valid) {
      console.log('Item added:', itemForm.value);
      itemForm.resetForm();
    }
  }
}
