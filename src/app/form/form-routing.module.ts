import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { FormComponent } from "./form/form.component";
import { FormRegistrationComponent } from "./form-registration/form-registration.component";
import { FormAuthorisationComponent } from "./form-authorisation/form-authorisation.component";

const routes: Routes = [
  {path: '', component: FormComponent, children: [
      {path: '', component: FormRegistrationComponent},
      {path: 'authorisation', component: FormAuthorisationComponent}
    ]}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [CommonModule]
})
export class FormRoutingModule { }
