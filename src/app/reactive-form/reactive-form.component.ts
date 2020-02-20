import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidateUrl } from '../_validators/url-validator';
import { NoSpaceValidator } from '../_validators/no-space-validator';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  public userForm: FormGroup;
  public isFormSubmitted = false;

  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.userForm = this.fb.group({
      userName: ['', [NoSpaceValidator]],
      address: ['', Validators.required],
      website: ['', [ValidateUrl, NoSpaceValidator]],
    });
  }

  submitForm() {
    console.log('this.userForm.value', this.userForm.valid);
    if (this.userForm.valid) {
      console.log('this.userForm.value', this.userForm.value);
      alert(JSON.stringify(this.userForm.value));
    }
  }

}
