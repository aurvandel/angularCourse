import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  submitted = false;
  defaultSubscription = 'advanced';
  email = '';
  subscription = '';
  password = '';

  onSubmit() {
    this.submitted = true;
    console.log(this.signupForm);
    this.email = this.signupForm.value.email;
    this.subscription = this.signupForm.value.subscription;
    this.password = this.signupForm.value.password;
    this.signupForm.reset();
  }
}
