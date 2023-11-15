import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { EventService } from 'src/app/services/event/event.service';
import { WelcomeModalComponent } from '../../modals/welcome-modal/welcome-modal.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('welcome-modal-component',{static:true}) welcomeModalComponent:WelcomeModalComponent;

  formData: UntypedFormGroup;
  error: any;
  get email() { return this.formData.get('email'); }
  get password() { return this.formData.get('password'); }
  get name() { return this.formData.get('name'); }
  
  @Output() finishCallback: EventEmitter<any> = new EventEmitter();

  constructor(private formBuilder: UntypedFormBuilder, private auth: AuthService, private eventService: EventService, private router: Router) {
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
        this.eventService.welcomeModalEvent.next();
      }
    },err=>{
      if(err.error){
        console.log(err);
        this.error = err.error.error;
      }
    })
  }


}
