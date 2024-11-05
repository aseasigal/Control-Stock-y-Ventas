import { Component } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  public catalogList: Product[] = []
  public addNewProduct(product:Product):void{
    this.catalogList.push(product)
  }
}
