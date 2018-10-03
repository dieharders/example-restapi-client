import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css'],
})
export class CustomerDetailsComponent implements OnInit {

  customer = new Customer() ;
  submitted = false;
  message: string;
  hobbyInputVal: string;

  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.hobbyInputVal = '';
    // Get the customer via id in url from server
    this.customerService.getCustomer(id)
      .subscribe(customer => this.customer = customer);
  }

  deleteHobby(hobby): void {
    for (let index = 0; index < this.customer.hobbies.length; index++) {
      if (this.customer.hobbies[index] == hobby) {
        // Delete this item from array
        this.customer.hobbies.splice(index, 1);
      }
    }
  }

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

  update(): void {
    this.submitted = true;
    this.customerService.updateCustomer(this.customer)
        .subscribe(result => this.message = "Hero Updated Successfully!");
  }

  delete(): void {
    this.submitted = true;
    this.customerService.deleteCustomer(this.customer._id)
        .subscribe(result => this.message = "Hero Deleted Successfully!");
  }

  goBack(): void {
    this.location.back();
  }
}