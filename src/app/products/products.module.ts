import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormProductComponent } from './components/form-product/form-product.component';
import { ListProductComponent } from './components/list-product/list-product.component';
import { MainPageComponent } from './pages/main-page.component';

@NgModule({
  declarations: [
    FormProductComponent,
    ListProductComponent,
    MainPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    FormProductComponent,
    ListProductComponent,
    MainPageComponent
  ]
})
export class ProductsModule {}