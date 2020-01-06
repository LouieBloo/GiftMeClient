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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
