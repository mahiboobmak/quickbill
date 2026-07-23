import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { validate } from '@angular/forms/signals';

@Component({
  selector: 'app-login',
  imports: [CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class LoginComponent {

  hidePassword =  true;
  loginForm: FormGroup;
  title = "QuickBill";
  constructor(private fb: FormBuilder)
  {
    this.loginForm = this.fb.group({
      emial: ['',Validators.required,Validators.required],
      password: ['',Validators.required],
      rememberMe: [false]
    });
  }
login()
{
  if(this.loginForm.invalid)
  {
    this.loginForm.markAllAsTouched();
    return;
  }

  console.log(this.loginForm.value);
  console.log("hello");
}
}
