import { Component, Output, EventEmitter} from '@angular/core';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'form-product',
  templateUrl: './form-product.component.html',
  styleUrl: './form-product.component.css'
})
export class FormProductComponent {
  @Output()
  public onNewProduct : EventEmitter<Product> = new EventEmitter()
  
  public product : Product = {
    id: 0,
    name: "",
    category: "",
    buyPrice: 0,
    sellPrice: 0,
    stock: 0,
    proveedor: "",
  }
  public emitProduct():void{
    this.onNewProduct.emit({...this.product})
    this.product.name = ""
    this.product.id = 0
    this.product.category = ""
    this.product.buyPrice = 0 
    this.product.sellPrice = 0
    this.product.stock = 0
  }
}
