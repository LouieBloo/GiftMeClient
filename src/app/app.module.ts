import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/pages/home/home.component';
import { PictureWithTextComponent } from './components/buttons/picture-with-text/picture-with-text.component';
import { FindModalComponent } from './components/modals/find-modal/find-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CloseComponent } from './components/buttons/close/close.component';
import { PictureWithTextSmallComponent } from './components/buttons/picture-with-text-small/picture-with-text-small.component';
import { MyListsComponent } from './components/pages/my-lists/my-lists.component';
import { ListOverviewItemComponent } from './components/lists/list-overview-item/list-overview-item.component';
import { LoginSignupModalComponent } from './components/modals/login-signup-modal/login-signup-modal.component';
import { LoginComponent } from './components/users/login/login.component';
import { RegisterComponent } from './components/users/register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProfileDisplayComponent } from './components/users/profile-display/profile-display.component';
import { UserAccountComponent } from './components/modals/user-account/user-account.component';
import { ListPageComponent } from './components/pages/list-page/list-page.component';
import { EditableTextComponent } from './components/app/editable-text/editable-text.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PictureWithTextComponent,
    FindModalComponent,
    CloseComponent,
    PictureWithTextSmallComponent,
    MyListsComponent,
    ListOverviewItemComponent,
    LoginSignupModalComponent,
    LoginComponent,
    RegisterComponent,
    ProfileDisplayComponent,
    UserAccountComponent,
    ListPageComponent,
    EditableTextComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
