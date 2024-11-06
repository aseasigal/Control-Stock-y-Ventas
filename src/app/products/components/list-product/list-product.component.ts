import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'list-product',
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.css'
})
export class ListProductComponent {
  @Input()
  public catalogList : Product[] = []

  @Output()
  public onUpdateProduct: EventEmitter<Product> = new EventEmitter();

  public editingProductId: number | null = null;

  public editProduct(productId: number): void {
    this.editingProductId = productId;
  }

  public saveProduct(product: Product): void {
    this.onUpdateProduct.emit({ ...product });
    this.editingProductId = null;
  }

  public cancelEdit(): void {
    this.editingProductId = null;
  }
}
