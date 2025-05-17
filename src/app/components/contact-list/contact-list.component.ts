import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactService } from '../../services/contact.service';
import { ContactCardComponent } from '../contact-card/contact-card.component';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [CommonModule, ContactCardComponent],
  templateUrl: './contact-list.component.html'
})
export class ContactListComponent {
  contactService = inject(ContactService);
  contacts = this.contactService.getContacts;
}
