import { AbstractControl, ValidationErrors } from "@angular/forms";
import { PasswordChangeComponent } from "./password-change.component";


export class PasswordValidators{
static wrongpassword (control:AbstractControl) :Promise<ValidationErrors|null>{

    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if (control.value !=='1234')
            resolve({wrongpassword:true});
           else resolve(null);
        }, 2000);

    });
}
static differentpassword(control:AbstractControl) :ValidationErrors|null{
   let newPassword=control.get('newPassword');
   let confirmedPassword =control.get('confirmedPassword');
   if (newPassword?.value!==confirmedPassword?.value)
   return {differentpassword: true};
  
   return null;

}

}