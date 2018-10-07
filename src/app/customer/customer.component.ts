//** This shows list of all 'customers' **//
import { Component, OnInit } from '@angular/core';

import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { animView } from '../animations/transitions.animation'; // Anim file
import { stringify } from '@angular/core/src/util';

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
  // Placeholder customer data
  person = [
    {"_id":"1","firstname":"???","lastname":"????","age":26,"hobbies":["Playing 🏆sports","Dating 😎girls","Catching 🔥fire"]},
    {"_id":"2","firstname":"???","lastname":"????","age":26,"hobbies":["Playing 🏆sports","Dating 😎girls","Catching 🔥fire"]},
    {"_id":"3","firstname":"???","lastname":"????","age":26,"hobbies":["Playing 🏆sports","Dating 😎girls","Catching 🔥fire"]},
    {"_id":"4","firstname":"???","lastname":"????","age":26,"hobbies":["Playing 🏆sports","Dating 😎girls","Catching 🔥fire"]}
  ];

  ngOnInit(): void {
    // Set placeholder customers
    this.customers = this.person;
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
