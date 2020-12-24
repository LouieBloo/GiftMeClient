import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  formData: FormGroup;
  error: any;
  showingPassword: boolean = true;
  submitButtonText: string = "Login";
  successMessage: string = "";

  get email() { return this.formData.get('email'); }
  get password() { return this.formData.get('password'); }
  @Output() finishCallback: EventEmitter<any> = new EventEmitter();
  @ViewChild("emailInput", null) emailInput: ElementRef;

  constructor(private formBuilder: FormBuilder, private auth: AuthService, private router: Router, private userService: UserService, private notifierService: NotifierService) {
    this.formData = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }

  onSubmit(form) {
    if (this.showingPassword) {
      this.auth.login(form).subscribe(result => {
        if (result.token) {
          this.finishCallback.emit();
          this.notifierService.notify("success", "Welcome back!");
        }
      }, err => {
        if (err.error) {
          console.log(err);
          this.error = err.error.error;
        }
      })
    } else {
      this.userService.resetPassword(form.email).subscribe(result=>{
        this.successMessage = "Password Reset Succesfully! Check your email for a link. You can close this window."
      },error=>{
        this.error = {
          email:{
            msg :"Error Resetting Password"
          }
        }
      })
    }

  }

  resetPasswordClicked() {
    if (this.showingPassword) {
      this.showingPassword = false;
      this.submitButtonText = "Reset Password"
    }
  }
}
