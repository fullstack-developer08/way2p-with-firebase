import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'second-child',
  template: `
    <form [formGroup]="userForm" (ngSubmit)="onSubmit()" novalidate>
      <input type="text" placeholder="First Name" formControlName="firstName"/>
      <input type="text" placeholder="Last Name" formControlName="lastName"/>
      <input type="text" placeholder="Phone No" formControlName="phoneNumber"/>
      <button type="submit"> Submit</button>
    </form>
  `
})
export class SecondChildComponent implements OnInit {
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.createUserForm();
  }

  createUserForm = () => {
    return this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit() {
    this.userForm.reset();
  }

}
