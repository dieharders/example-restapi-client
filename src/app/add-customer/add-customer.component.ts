import { Component, OnInit } from '@angular/core';

import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { animView } from '../animations/transitions.animation'; // Anim file

import { Location } from '@angular/common';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css'],
  animations: [animView] // add our animations
})

export class AddCustomerComponent{

  customer = new Customer();
  submitted = false;
  hobbyInputVal: string;

  constructor(
    private customerService: CustomerService,
    private location: Location
  ) { }
  
  formSubmitHobby(hobby): void {
    if (hobby != '') {
      console.log(hobby+', added to hobbies');
      // Add a hobby to start of array
      if (!this.customer.hobbies) {
        this.customer.hobbies = [];
      }
      this.customer.hobbies.unshift(hobby);
      // Clear hobby input val
      this.hobbyInputVal = '';
    }
  }

  deleteHobby(hobby): void {
    for (let index = 0; index < this.customer.hobbies.length; index++) {
      if (this.customer.hobbies[index] == hobby) {
        // Delete this item from array
        this.customer.hobbies.splice(index, 1);
      }
    }
  }

  newCustomer(): void {
    this.submitted = false;
    this.customer = new Customer();
  }

  addCustomer() {
    this.submitted = true;
    this.hobbyInputVal = ''; // Clear hobby input val
    this.save();
  }

  goBack(): void {
    this.location.back();
  }

  private save(): void {
    console.log(this.customer);
    this.customerService.addCustomer(this.customer)
        .subscribe();
  }
}
