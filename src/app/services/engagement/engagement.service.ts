import { Injectable } from '@angular/core';
import { AuthService } from '../auth-service/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EngagementService {

  constructor(private auth: AuthService) { }

  public getLists():Observable<any>{
    return this.auth.request('get','/engagement/list',{limit:20});
  }
}
