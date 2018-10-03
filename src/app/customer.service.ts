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
  // For testing locally: 'http://localhost:8080/'
  private rootUrl = 'https://example-restapi-server.herokuapp.com/';
  private customersUrl = this.rootUrl + 'api/customers';  // URL to web api
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