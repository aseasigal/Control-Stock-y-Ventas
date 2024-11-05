import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListClientsComponent } from './customers/components/list-clients/list-clients.component';
import { FormClientsComponent } from './customers/components/form-clients/form-clients.component';
import { FormsModule } from '@angular/forms';
import { ProductsModule } from './products/products.module';

@NgModule({
  declarations: [
    AppComponent,
    ListClientsComponent,
    FormClientsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ProductsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
