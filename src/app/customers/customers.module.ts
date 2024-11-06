import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormClientsComponent } from './components/form-clients/form-clients.component';
import { ListClientsComponent } from './components/list-clients/list-clients.component';
import { MainPageComponent } from './pages/main-page.component';

@NgModule({
  declarations: [
    FormClientsComponent,
    ListClientsComponent,
    MainPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    FormClientsComponent,
    ListClientsComponent,
    MainPageComponent,
  ]
})
export class ClientesModule {}