import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contact } from "../contact";
import { Window } from 'selenium-webdriver';
@Injectable()
export class ContactsService {

  
  constructor(private http: HttpClient) { }

  getContacts() {
    return this.http.get(window.location.href+'/api/contacts');
  }

  addContact(newContact){
    var headers = new HttpHeaders();
    headers.append("Content-Type","application/json");
    return this.http.post(window.location.href+"/api/contacts",newContact,{headers : headers});
    // .subscribe((res) => {console.log(res)},(err) => {console.log(err)});
  }

  deleteContact(id){
    return this.http.delete(window.location.href+"/api/contact/"+id);
    //.subscribe((res) => {console.log(res)},(err) => {console.log(err)});
  }
}
