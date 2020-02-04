import { Injectable } from '@angular/core';
import { LoginModel } from 'src/app/models/auth';
import { HttpService } from '../http-service/http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private auth:HttpService) { }

  
}
