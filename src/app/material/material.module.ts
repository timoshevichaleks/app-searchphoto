import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from "ngx-pagination";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ReactiveFormsModule } from "@angular/forms";

const materialComponents = [
  CommonModule,
  NgxPaginationModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  BrowserAnimationsModule,
  MatSidenavModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  ReactiveFormsModule
]

@NgModule({
  declarations: [],
  imports: [materialComponents],
  exports: [materialComponents]
})
export class MaterialModule { }
