import { Component, Input } from '@angular/core';
import { Customer } from '../../interfaces/customer.interface';

@Component({
  selector: 'list-clients',
  templateUrl: './list-clients.component.html',
  styleUrl: './list-clients.component.css'
})
export class ListClientsComponent {

    @Input()
    public clientsList : Customer[] = []
}
