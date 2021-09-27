import { Component, OnInit } from '@angular/core';
import { ImagesService } from "../images.service";
import { first, switchMap } from "rxjs/operators";
import { Observable } from "rxjs";
import { PhotoResponse } from "../models/photo-response";

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {

  photos: PhotoResponse[];

  constructor(private imagesService: ImagesService) {
  }

  ngOnInit(): void {
   this.imagesService.getSaveImages()
      .pipe(first())
      .subscribe(
        (res: {[key: string]: PhotoResponse}) => {
          this.setPhotos(res)
        }
      )
  }

  private setPhotos(result: {[key: string]: PhotoResponse}): void {
    this.photos = result ? Object.keys(result).map(key => {return {key, ...result[key]}}) : [];
  }

  deletePhoto(photo: PhotoResponse): void {
    this.imagesService.delete(photo)
      .pipe(
        switchMap((): Observable<{ [key: string]: PhotoResponse }> => {
          return this.imagesService.getSaveImages()
        }),
        first()
      )
      .subscribe(
        (res: { [key: string]: PhotoResponse }) => {
          this.setPhotos(res)
        }
      )
  }

}
