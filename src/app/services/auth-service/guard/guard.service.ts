import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardService {

  constructor(private auth: AuthService,private router: Router) { }

  canActivate(){
    if(!this.auth.isLoggedIn()){
      this.router.navigateByUrl('/');
      return false;
    }

    return true;
  }
}
