import { Injectable } from '@angular/core';
import { WishList, WishListItem } from 'src/app/models/wish-list';
import { Observable } from 'rxjs';
import { AuthService } from '../auth-service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class WishListItemService {

  constructor(private auth :AuthService) { }

  public create(item:WishListItem):Observable<any>{
    return this.auth.request('post','/wishlist/item',item);
  }

  public edit(item:WishListItem):Observable<any>{
    return this.auth.request('patch','/wishlist/item/' + item._id,item);
  }
  
  public get(owner?:string):Observable<any>{
    if(owner){
      return this.auth.request('get','/wishlist/item',{owner:owner});
    }else{
      return this.auth.request('get','/wishlist/item');
    }
  }

  public getSingle(id:string):Observable<any>{
      return this.auth.request('get','/wishlist/item' + id);
  }

  public delete(id:string):Observable<any>{
    return this.auth.request('delete','/wishlist/item'+id);
  }

  public claim(item:WishListItem):Observable<any>{
    return this.auth.request('patch','/wishlist/item/' + item._id + "/claim",item);
  }
  
  public unclaim(item:WishListItem):Observable<any>{
    return this.auth.request('patch','/wishlist/item/' + item._id + "/unclaim",item);
  }
  

}
