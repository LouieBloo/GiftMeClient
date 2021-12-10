import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { NotifierService } from 'angular-notifier';
import { EventService } from 'src/app/services/event/event.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  formData: FormGroup;
  token:string;
  error: any;
  get password() { return this.formData.get('password'); }
  
  @Output() finishCallback: EventEmitter<any> = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private router: Router,private route: ActivatedRoute,private userService:UserService,private notifierService: NotifierService,private eventService:EventService,private titleService:Title) {
    this.formData = this.formBuilder.group({
      password: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.titleService.setTitle("Reset Password");

    this.route.params.subscribe(params => {
      if(params['token']){
        this.token = params['token'];
      }
    });
  }


  onSubmit(form) {
    this.userService.changePassword(this.token,form.password).subscribe(result => {
      this.notifierService.notify("success","Password Reset Successfully!");
      this.router.navigateByUrl('/');
      this.eventService.loginModalEvent.next({callback:null,showRegister:false});
    },err=>{
      if(err.error){
        console.log(err);
        this.error = err.error.error;
      }
    })
  }


}
