import { Component } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Component({
  selector: 'main-page-products',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  public catalogList: Product[] = []

  public addNewProduct(product:Product):void{
    this.catalogList.push(product)
  }
  
  public updateProduct(updatedProduct: Product): void {
    const index = this.catalogList.findIndex(p => p.id === updatedProduct.id);
    if (index !== -1) {
      this.catalogList[index] = { ...updatedProduct };
    }
  }
  
}
