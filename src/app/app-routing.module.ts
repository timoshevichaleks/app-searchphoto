import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImagesListComponent } from "./images/images-list/images-list.component";
import { BookmarksComponent } from "./images/bookmarks/bookmarks.component";

const routes: Routes = [
  {path: '', redirectTo: 'images', pathMatch: 'full'},
  {path: 'images', component: ImagesListComponent},
  {path: 'bookmarks', component: BookmarksComponent},
  {path: 'registration', loadChildren: () => import('../app/form/form.module').then(m => m.FormModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
