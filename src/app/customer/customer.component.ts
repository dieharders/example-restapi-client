//** This shows list of all 'customers' **//
import { Component, OnInit } from '@angular/core';

import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { animView } from '../animations/transitions.animation'; // Anim file

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  animations: [animView] // add our animations
})

export class CustomerComponent  implements OnInit {

  customers: Customer[];

  constructor(private customerService: CustomerService) {}

  // Loading spinner stuff
  showSpinner: boolean = true;
  // Show the main hero list?
  showHeroes: boolean = false;

  ngOnInit(): void {
     this.getCustomers();
  }

  getCustomers() {
    return this.customerService.getCustomers()
      .subscribe(
        customers => {
        console.log(customers);
        this.customers = customers;
        this.showSpinner = false; // Hide spinner
        }
      );
  }
  showHeroList() {
    this.showHeroes = true;
  }
}
