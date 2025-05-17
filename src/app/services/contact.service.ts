import { Injectable, signal } from '@angular/core';
import { Contact } from '../models/contact.model';
import { CONTACTS } from '../models/contacts-data';

@Injectable({ providedIn: 'root' })
export class ContactService {
  private contactList = signal<Contact[]>([...CONTACTS]);

  // Expose read-only signal
  getContacts = this.contactList.asReadonly();

  addContact(contact: Contact) {
    console.log('Adding contact:', contact); // for debugging
    const updated = [...this.contactList(), contact];
    this.contactList.set(updated);
  }

  deleteContact(id: number) {
    const updated = this.contactList().filter(c => c.id !== id);
    this.contactList.set(updated);
  }

  updateContact(updated: Contact) {
    const newList = this.contactList().map(c =>
      c.id === updated.id ? updated : c
    );
    this.contactList.set(newList);
  }

  getContactById(id: number): Contact | undefined {
    return this.contactList().find(c => c.id === id);
  }
}
