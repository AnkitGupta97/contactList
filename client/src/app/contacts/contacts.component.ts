import { Component, OnInit } from '@angular/core';
import {Contact} from "../contact"
import {ContactsService} from "../services/contacts.service";
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  providers:[ContactsService]
})
export class ContactsComponent implements OnInit {
  contacts : any[];
  contact : Contact;
  first_name : String;
  last_name : String;
  phone : String;

  constructor(private contactService : ContactsService) { }

  ngOnInit() {
    this.contactService.getContacts().subscribe((res) => {
      console.log(res);
      // this.contacts = JSON.parse(res.toString());
    },(err) => {console.log(err)});
  }

  deleteContact(id){
    this.contactService.deleteContact(id).subscribe((res) => {
      console.log(res);
      // this.contacts = JSON.parse(res.toString());
    },(err) => {console.log(err)});
  }
}
