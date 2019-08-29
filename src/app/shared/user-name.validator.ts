import { ValidatorFn, AbstractControl, FormGroup } from "@angular/forms";

export function forbiddenNaveValidator(forbiddenName:RegExp): ValidatorFn{
    return (control:AbstractControl)=>{
        const forbidden = forbiddenName.test(control.value);
        return forbidden ? {'forbiddenName':{value:control.value}}:null;
    };
}

// export function forbiddenNaveValidator(control: AbstractControl) {
//     const forbidden = /admin/.test(control.value);
//     return forbidden ? {'forbiddenName':{value:control.value}}:null;
// }


export function passwordValidator(control: AbstractControl) {
    const password = control.get('password');
    const cPassword = control.get('confirmPassword');


    if(cPassword.errors){
        return;
    }
    if(password.value !== cPassword.value){
        cPassword.setErrors({ mustMatch: true });
    }else{
        cPassword.setErrors(null);
    }
}