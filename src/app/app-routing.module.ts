import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { MyListsComponent } from './components/pages/my-lists/my-lists.component';


const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'my-lists',component:MyListsComponent, data: {animation: 'MainAnimation'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
