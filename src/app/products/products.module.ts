import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormProductComponent } from './components/form-product/form-product.component';
import { ListProductComponent } from './components/list-product/list-product.component';

@NgModule({
  declarations: [
    FormProductComponent,
    ListProductComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    FormProductComponent,
    ListProductComponent,
  ]
})
export class ProductsModule {}