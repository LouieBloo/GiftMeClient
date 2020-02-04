import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http-service/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  formData: FormGroup;
  error: string;
  get email() { return this.formData.get('email'); }
  get password() { return this.formData.get('password'); }
  @Output() finishCallback: EventEmitter<any> = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private auth: HttpService, private router: Router) {
    this.formData = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }

  onSubmit(form) {
    this.auth.login(form).subscribe(result => {
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
