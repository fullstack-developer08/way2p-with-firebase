import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-currency-conversion',
  templateUrl: './currency-conversion.component.html',
  styleUrls: ['./currency-conversion.component.scss']
})
export class CurrencyConversionComponent implements OnInit {
  conversionForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.conversionForm = this.createForm();
  }

  createForm() {
    return this.formBuilder.group({
      currencyFrom: ['', Validators.required],
      currencyTo: ['', Validators.required],
      quantity: [0, Validators.required], 
    });
  }

  onSubmit() {
    this.http.get('/test/todos/etc')
    .subscribe((data) => {console.log(data)})
  } 

}
