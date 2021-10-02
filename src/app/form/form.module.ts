import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ReactiveFormsModule } from "@angular/forms";
import { FormRoutingModule } from './form-routing.module';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { FormComponent } from './form/form.component';
import { RouterModule } from "@angular/router";
import { FormAuthorisationComponent } from './form-authorisation/form-authorisation.component';


@NgModule({
  declarations: [

    FormComponent,
     FormAuthorisationComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormRoutingModule,
    MatButtonModule,
    MatIconModule,
    RouterModule
  ]
})
export class FormModule {
}
