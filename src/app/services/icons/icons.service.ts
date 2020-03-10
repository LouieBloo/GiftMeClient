import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth-service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class IconsService {

  lastSyncDate:Date;
  savedIcons:any;
  waitingForCache:boolean = false;
  callbacks:any[] = [];

  constructor(private auth:AuthService) { }

  public get(callback){
    if(this.waitingForCache){
      this.callbacks.push(callback);
    }
    else if(this.lastSyncDate && (new Date().getMilliseconds() - this.lastSyncDate.getMilliseconds() < 60000)){
      return callback(this.savedIcons);
    }else{
      this.waitingForCache = true;
      this.callbacks.push(callback);
      this.auth.request('get','/wishlist/item/icons').subscribe(result=>{
        this.lastSyncDate = new Date();
        this.waitingForCache = false;
        this.savedIcons = result;
        this.callbacks.forEach(c=>{
          c(this.savedIcons);
        })
        this.callbacks = [];
      })
    }
      
  }
}
