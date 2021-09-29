import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImagesModule } from "./images/images.module";
import { HttpClientModule } from "@angular/common/http";
import { MaterialModule } from "./material/material.module";
import { FormRegistrationComponent } from './form/form-registration/form-registration.component';
import { FormModule } from "./form/form.module";

@NgModule({
  declarations: [
    AppComponent,
    FormRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ImagesModule,
    HttpClientModule,
    MaterialModule,
    FormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
