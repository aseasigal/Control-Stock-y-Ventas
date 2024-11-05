import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListClientsComponent } from './customers/components/list-clients/list-clients.component';
import { FormClientsComponent } from './customers/components/form-clients/form-clients.component';
import { FormProductComponent } from './products/components/form-product/form-product.component';
import { ListProductComponent } from './products/components/list-product/list-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ListClientsComponent,
    FormClientsComponent,
    FormProductComponent,
    ListProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
