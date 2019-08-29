import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { forbiddenNaveValidator, passwordValidator } from './shared/user-name.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
            title: ['', Validators.required],
            firstName: ['', [Validators.required,forbiddenNaveValidator(/admin/)]],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required],
            acceptTerms: [false, Validators.requiredTrue]
        },{validators:passwordValidator});
  }
  



  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;
      console.log(this.registerForm.controls.confirmPassword)
      console.log(this.registerForm.controls.password)
      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      // display form values on success
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }
}
