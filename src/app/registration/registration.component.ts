import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  @Input() formHeading : string = 'Register';
  @Input() isVisibleForm : boolean = false;
  @Input() isVisible = true;
  @Input() buttonName : string = 'Register';
  registration: FormGroup;

  @Output() formDetails = new EventEmitter<any>();

  submitData(){
    console.log(this.registration.value);
    this.formDetails.emit(this.registration.value);
  }

  constructor(private router: Router, private fb : FormBuilder) {
    this.registration = this.fb.group({
      username        : ['', Validators.required],
      password        : ['', Validators.required]
    })
  } // Inject the Router

  redirectToLogin() {
    this.router.navigate(['/login2']); // Redirect to 'login2' component
  }
}
