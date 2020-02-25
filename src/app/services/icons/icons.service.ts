import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth-service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class IconsService {

  constructor(private auth:AuthService) { }

  public get():Observable<any>{
      return this.auth.request('get','/wishlist/item/icons');
  }
}
