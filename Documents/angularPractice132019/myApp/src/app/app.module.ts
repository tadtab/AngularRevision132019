import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InputFieldComponent } from './header/input-field/input-field.component';
import { FormsModule } from '@angular/forms';
import {RootReducer} from './root/root.reducer';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InputFieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot(RootReducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
