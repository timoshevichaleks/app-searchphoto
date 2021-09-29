import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImagesListComponent } from "./images/images-list/images-list.component";
import { BookmarksComponent } from "./images/bookmarks/bookmarks.component";
import { FormRegistrationComponent } from "./form/form-registration/form-registration.component";

const routes: Routes = [
  {path: '', redirectTo: 'images', pathMatch: 'full'},
  {path: 'images', component: ImagesListComponent},
  {path: 'bookmarks', component: BookmarksComponent},
  {path: 'authorization', component: FormRegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
