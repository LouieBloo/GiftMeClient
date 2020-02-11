import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formData: FormGroup;
  error: any;
  get email() { return this.formData.get('email'); }
  get password() { return this.formData.get('password'); }
  get name() { return this.formData.get('name'); }
  @Output() finishCallback: EventEmitter<any> = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private auth: AuthService, private router: Router) {
    this.formData = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', [Validators.required]],
      name: ['', [Validators.required]],
    });
  }

  ngOnInit() {
  }

  onSubmit(form) {
    this.auth.register(form).subscribe(result => {
      if (result.token) {
        this.finishCallback.emit();
      }
    },err=>{
      if(err.error){
        console.log(err);
        this.error = err.error.error;
      }
    })
  }


}
