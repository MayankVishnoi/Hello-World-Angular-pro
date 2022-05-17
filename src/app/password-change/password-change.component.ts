import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { PasswordValidators } from './password.validators';

@Component({
  selector: 'password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.css']
})
export class PasswordChangeComponent{

form =new FormGroup({

  oldPassword:new FormControl('',Validators.required,PasswordValidators.wrongpassword),
  
  newPassword:new FormControl(),
  
  confirmedPassword:new FormControl('')


},PasswordValidators.differentpassword);

get getControl(){
  return this.form.controls;
}
get oldPassword(){
  return this.form.get('oldPassword');
}


}
