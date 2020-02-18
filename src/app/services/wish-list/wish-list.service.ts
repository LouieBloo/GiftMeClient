import { Injectable } from '@angular/core';
import { AuthService } from '../auth-service/auth.service';
import { WishList } from 'src/app/models/wish-list';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishListService {

  constructor(private auth:AuthService) { }

  public create(list:WishList):Observable<any>{
    return this.auth.request('post','/wishlist',list);
  }

  public edit(list:WishList):Observable<any>{
    return this.auth.request('patch','/wishlist/' + list._id,list);
  }
  
  public get(owner?:string):Observable<any>{
    if(owner){
      return this.auth.request('get','/wishlist',{owner:owner});
    }else{
      return this.auth.request('get','/wishlist');
    }
  }

  public getSingle(id:string):Observable<any>{
      return this.auth.request('get','/wishlist/' + id);
  }

  public delete(id:string):Observable<any>{
    return this.auth.request('delete','/wishlist/'+id);
  }
}
