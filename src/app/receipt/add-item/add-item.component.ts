import {Component, EventEmitter, Output} from '@angular/core';
import {Category} from "../../models/category";
import {Item} from "../../models/item";

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent {
  itemCategories: Category[] = Object.values(Category);
  @Output() newItem = new EventEmitter<Item>()

  addItem(itemForm: any): void {
    if (itemForm.valid) {
      if(!itemForm.value.imported){
        itemForm.value.imported = false;
      }
      this.newItem.emit(itemForm.value);

      console.log('Item added:', itemForm.value);
      itemForm.resetForm();
    }
  }
}
