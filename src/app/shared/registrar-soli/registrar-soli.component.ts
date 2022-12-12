import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-registrar-soli',
  templateUrl: './registrar-soli.component.html',
  styleUrls: ['./registrar-soli.component.css'],
})
export class RegistrarSoliComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
