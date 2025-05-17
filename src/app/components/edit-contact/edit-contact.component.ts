import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-edit-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './edit-contact.component.html'
})
export class EditContactComponent {
  contactService = inject(ContactService);
  route = inject(ActivatedRoute);
  router = inject(Router);

  id = Number(this.route.snapshot.paramMap.get('id'));
  contact = this.contactService.getContactById(this.id);

  fName = this.contact?.fName ?? '';
  lName = this.contact?.lName ?? '';
  phoneNumber = this.contact?.phoneNumber ?? '';
  email = this.contact?.email ?? '';

  updateContact() {
    this.contactService.updateContact({
      id: this.id,
      fName: this.fName,
      lName: this.lName,
      phoneNumber: this.phoneNumber,
      email: this.email
    });
    this.router.navigate(['/']);
  }
}
