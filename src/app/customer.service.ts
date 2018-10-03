import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  checkUrl () {
    let url = window.location.hostname;
    //console.log('URL: ' + url);
    if (url.search('localhost') > -1) {
      return 'http://localhost:8080/'; // For testing locally
    } else {
      return 'https://example-restapi-server.herokuapp.com/'; // Prod server
    }
  }
  private customersUrl = this.checkUrl() + 'api/customers';  // URL to web api
  constructor(
    private http: HttpClient
  ) { }

  getCustomers (): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.customersUrl)
  }

  getCustomer (id: string): Observable<Customer> {
    const url = `${this.customersUrl}/${id}`;
    return this.http.get<Customer>(url);
  }

  addCustomer (customer: Customer): Observable<any> {
    return this.http.post<Customer>(this.customersUrl, customer, httpOptions);
  }

  deleteCustomer (customer: Customer | string): Observable<Customer> {
    const id = typeof customer === 'string' ? customer : customer._id;
    const url = `${this.customersUrl}/${id}`;
    
    return this.http.delete<Customer>(url, httpOptions);
  }

  updateCustomer (customer: Customer): Observable<any> {
    return this.http.put(this.customersUrl, customer, httpOptions);
  }
}