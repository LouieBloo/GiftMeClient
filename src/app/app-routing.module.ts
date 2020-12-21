import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { MyListsComponent } from './components/pages/my-lists/my-lists.component';
import { ListPageComponent } from './components/pages/list-page/list-page.component';
import { RecentListsComponent } from './components/pages/recent-lists/recent-lists.component';
import { GuardService } from './services/auth-service/guard/guard.service';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ClaimedItemsComponent } from './components/pages/claimed-items/claimed-items.component';
import { ResetPasswordComponent } from './components/pages/reset-password/reset-password.component';


const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'wishlists',component:MyListsComponent, data: {animation: 'MainAnimation'} },
  {path: 'wishlists/owner/:id',component:MyListsComponent, data: {animation: 'MainAnimation4'} },
  {path: 'wishlists/:id',component:ListPageComponent, data: {animation: 'MainAnimation2'} },
  {path: 'items/claimed',component:ClaimedItemsComponent, data: {animation: 'ClaimedItemAnimation'} },
  {path: 'engagement/wishlists',component:RecentListsComponent, data: {animation: 'MainAnimation3'},canActivate:[GuardService] },
  {path: 'contact',component:ContactComponent, data: {animation: 'MainAnimation'} },
  {path: 'reset-password/:token',component:ResetPasswordComponent, data: {animation: 'ResetPasswordAnimation'} },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
