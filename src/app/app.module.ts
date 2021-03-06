import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

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
import { ListPageComponent } from './components/pages/list-page/list-page.component';
import { EditableTextComponent } from './components/app/editable-text/editable-text.component';
import { NotifierModule } from "angular-notifier";
import { LoadingSpinnerComponent } from './components/app/loading-spinner/loading-spinner.component';
import { ListItemSingleComponent } from './components/lists/list-items/list-item-single/list-item-single.component';
import { ListItemContainerComponent } from './components/lists/list-items/list-item-container/list-item-container.component';
import { EditLinkComponent } from './components/modals/edit-link/edit-link.component';
import { EditIconComponent } from './components/modals/edit-icon/edit-icon.component';
import { ClaimModalComponent } from './components/modals/claim-modal/claim-modal.component';
import { RecentListsComponent } from './components/pages/recent-lists/recent-lists.component';
import { RecentListItemComponent } from './components/lists/recent-list-item/recent-list-item.component';
import { DeleteModalComponent } from './components/modals/delete-modal/delete-modal.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { WelcomeModalComponent } from './components/modals/welcome-modal/welcome-modal.component';
import { ClaimedItemsComponent } from './components/pages/claimed-items/claimed-items.component';
import { ResetPasswordComponent } from './components/pages/reset-password/reset-password.component';
import { MenuComponent } from './components/app/menu/menu.component';
import { AutofocusDirective } from './directives/autofocus/autofocus.directive';
import { LandingPageComponent } from './components/pages/landing-page/landing-page.component';

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
    ListPageComponent,
    EditableTextComponent,
    LoadingSpinnerComponent,
    ListItemSingleComponent,
    ListItemContainerComponent,
    EditLinkComponent,
    EditIconComponent,
    ClaimModalComponent,
    RecentListsComponent,
    RecentListItemComponent,
    DeleteModalComponent,
    ContactComponent,
    WelcomeModalComponent,
    ClaimedItemsComponent,
    ResetPasswordComponent,
    MenuComponent,
    AutofocusDirective,
    LandingPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    NotifierModule.withConfig({ position: { vertical: { position: "bottom" } }, behaviour: { autoHide: 2000 } }),
    MatSidenavModule,
    MatListModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
