import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { MyListsComponent } from './components/pages/my-lists/my-lists.component';
import { ListPageComponent } from './components/pages/list-page/list-page.component';


const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'wishlists',component:MyListsComponent, data: {animation: 'MainAnimation'} },
  {path: 'wishlists/:id',component:ListPageComponent, data: {animation: 'MainAnimation2'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
