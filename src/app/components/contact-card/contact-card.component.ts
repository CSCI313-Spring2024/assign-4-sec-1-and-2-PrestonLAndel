import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contact } from '../../models/contact.model';
import { Router, RouterModule } from '@angular/router';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './contact-card.component.html'
})
export class ContactCardComponent {
  @Input() contact!: Contact;
  contactService = inject(ContactService);
  router = inject(Router);

  deleteContact() {
    this.contactService.deleteContact(this.contact.id);
  }

  editContact() {
    this.router.navigate(['/edit', this.contact.id]);
  }
}
