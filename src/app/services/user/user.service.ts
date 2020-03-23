import { Injectable } from '@angular/core';
import { LoginModel } from 'src/app/models/auth';
import { AuthService } from '../auth-service/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private auth:AuthService) { }

  public get(userId:string):Observable<any>{
      return this.auth.request('get','/users/'+userId);
  }
}
