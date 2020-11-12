import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { FirebaseService } from '../common/services/firebase.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  contactFormValid: string = '';
  formSubmittedSuccessfully = '';

  constructor(
    private fb: FormBuilder,
    private firebaseService: FirebaseService
  ) {
    this.contactForm = this.createContactForm();
  }

  ngOnInit(): void {
   
  }

  createContactForm() {
    return this.fb.group({
      'name': ['', Validators.required],
      'email': ['', [Validators.required, Validators.email]],
      'message': ['', Validators.required]
    });
  }

  submit() {
    this.contactForm.markAsTouched();
    this.contactForm.markAllAsTouched();
    this.contactFormValid = this.contactForm.status;
    if(this.contactForm.valid) {
      this.firebaseService.addContactInfo(this.contactForm.value);
      this.formSubmittedSuccessfully = 'Your query is submitted successfully.';
      this.contactForm.reset();
      setTimeout(()=>this.formSubmittedSuccessfully='', 3000);
    }
  }

}
