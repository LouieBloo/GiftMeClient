import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { MyListsComponent } from './components/pages/my-lists/my-lists.component';
import { ListPageComponent } from './components/pages/list-page/list-page.component';
import { RecentListsComponent } from './components/pages/recent-lists/recent-lists.component';
import { GuardService } from './services/auth-service/guard/guard.service';


const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'wishlists',component:MyListsComponent, data: {animation: 'MainAnimation'} },
  {path: 'wishlists/owner/:id',component:MyListsComponent, data: {animation: 'MainAnimation4'} },
  {path: 'wishlists/:id',component:ListPageComponent, data: {animation: 'MainAnimation2'} },
  {path: 'engagement/wishlists',component:RecentListsComponent, data: {animation: 'MainAnimation3'},canActivate:[GuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
