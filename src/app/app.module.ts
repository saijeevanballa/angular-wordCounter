import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TagComponentComponent } from './word-counter/word-counter.component';
import { CustomComponent } from "./manual-component/maual-component";
import { WithOutSecComponent } from './with-out-sec/with-out-sec.component';
import { FormsModule } from "@angular/forms"
import { UsersService } from "./users.service"
import { HttpClientModule } from "@angular/common/http"

@NgModule({
  declarations: [
    AppComponent,
    TagComponentComponent,
    CustomComponent,
    WithOutSecComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
