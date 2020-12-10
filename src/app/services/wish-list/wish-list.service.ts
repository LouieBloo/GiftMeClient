import { Injectable } from '@angular/core';
import { AuthService } from '../auth-service/auth.service';
import { WishList } from 'src/app/models/wish-list';
import { Observable } from 'rxjs';
import { SearchParameter } from 'src/app/models/auth';

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
  
  public get(params?:SearchParameter):Observable<any>{
    if(params){
      return this.auth.request('post','/wishlist/query',params);
    }else{
      return this.auth.request('post','/wishlist/query');
    }
  }

  public getExists(id:string):Observable<any>{
    return this.auth.request('get','/wishlist/' + id + '/exists');
  }

  public getSingle(id:string):Observable<any>{
      return this.auth.request('get','/wishlist/' + id);
  }

  public delete(id:string):Observable<any>{
    return this.auth.request('delete','/wishlist/'+id);
  }


  public addSubscriber(list:WishList):Observable<any>{
    return this.auth.request('post','/wishlist/'+list._id+'/subscriber',list);
  }

  public deleteSubscriber(list:WishList):Observable<any>{
    return this.auth.request('delete','/wishlist/'+list._id+'/subscriber',list);
  }
}
