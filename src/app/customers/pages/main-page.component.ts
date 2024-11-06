import { Component } from '@angular/core';
import { Customer } from '../interfaces/customer.interface';

@Component({
  selector: 'main-page-clients',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  public customerList: Customer[] = []
  public addNewClient(client:Customer):void{
    this.customerList.push(client)
  }
}
