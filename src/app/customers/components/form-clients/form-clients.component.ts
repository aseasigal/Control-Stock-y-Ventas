import { Component, Output, EventEmitter } from '@angular/core';
import { Customer } from '../../interfaces/customer.interface';

@Component({
  selector: 'form-clients',
  templateUrl: './form-clients.component.html',
  styleUrl: './form-clients.component.css'
})
export class FormClientsComponent {

    @Output()
    public onNewClient: EventEmitter<Customer> = new EventEmitter()
    public client : Customer = {
      id:0,
      name:'',
      direction:'',
      phone:''
    }
    public emitClient():void {
      this.onNewClient.emit({...this.client})
      this.client.name = ''
      this.client.direction = ''
      this.client.phone = ''
      this.client.id++
    }
}
