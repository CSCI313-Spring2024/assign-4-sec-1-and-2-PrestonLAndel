import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-add-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './add-contact.component.html'
})
export class AddContactComponent {
  contactService = inject(ContactService);
  router = inject(Router);

  fName = '';
  lName = '';
  phoneNumber = '';
  email = '';

  addContact() {
    console.log('Add Contact Clicked!');

    const newId = Date.now();
    this.contactService.addContact({
      id: newId,
      fName: this.fName,
      lName: this.lName,
      phoneNumber: this.phoneNumber,
      email: this.email
    });

    this.router.navigate(['/']);
  }
}
