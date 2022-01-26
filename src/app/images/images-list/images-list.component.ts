import { Component, OnInit } from '@angular/core';
import { ImagesService } from "../images.service";
import { FormControl } from "@angular/forms";
import { BehaviorSubject, combineLatest, Observable, of } from "rxjs";
import { debounceTime, distinctUntilChanged, first, switchMap } from "rxjs/operators";
import { PageEvent } from "@angular/material/paginator";
import { PhotoResponse } from "../models/photo-response";

@Component({
  selector: 'app-images-list',
  templateUrl: './images-list.component.html',
  styleUrls: ['./images-list.component.scss']
})
export class ImagesListComponent implements OnInit {

  photos$: Observable<PhotoResponse[]>;
  length: Observable<number>;
  page = new BehaviorSubject<number>(1);
  pageSize = new BehaviorSubject<number>(12)
  searchControl: FormControl = new FormControl();
  userUid: string;

  constructor(private imagesService: ImagesService) {
  }

  ngOnInit(): void {
    this.photos$ = combineLatest([this.page, this.searchControl.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged()
      ), this.pageSize])
      .pipe(
        switchMap(([pageNumber, searchValue, pageSize]): Observable<PhotoResponse[]> => {
          return searchValue.trim().length >= 1 ?
            this.imagesService.getImages(searchValue, pageNumber, pageSize) : of([])
        })
      )

    this.length = this.imagesService.totalPhoto;
  }

  onPageChanged(event: PageEvent) {
    this.page.next(event.pageIndex + 1);
    this.pageSize.next(event.pageSize);
  }

  savePhoto(photo: PhotoResponse): void {
    this.imagesService.saveImages(photo).pipe(first()).subscribe();
  }
}
