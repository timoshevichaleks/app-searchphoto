import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "../../environments/environment.prod";
import { map, tap } from "rxjs/operators";
import { PhotoResponse } from "./models/photo-response";
import { BehaviorSubject, Observable } from "rxjs";
import { PhotoPagination } from "./models/photo-pagination";

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  totalPhoto = new BehaviorSubject<number>(0);

  constructor(private http: HttpClient) {
  }

  getImages(keyword: string, pageNumber: number, pageSize: number): Observable<PhotoResponse[]> {
    const params = new HttpParams()
      .set('api_key', `${environment.key}`)
      .set('text', keyword)
      .set('format', 'json')
      .set('nojsoncallback', '1')
      .set('per_page', pageSize)
      .set('page', pageNumber)

    return this.http.get<PhotoPagination>(environment.api, {params})
      .pipe(
        tap(res => this.totalPhoto.next(res.photos.total)),
        map((res: PhotoPagination) => res.photos.photo)
      )
  }

  saveImages(photo: PhotoResponse): Observable<PhotoResponse> {
    return this.http.post<PhotoResponse>(`${environment.dataBase}.json`, photo);
  }

  getSaveImages(): Observable<{[key: string]: PhotoResponse}> {
    return this.http.get<{[key: string]: PhotoResponse}>(`${environment.dataBase}.json`);
  }

  delete(photo: PhotoResponse): Observable<void> {
    return this.http.delete<void>(`${environment.dataBase}/${photo.key}.json`)
  }
}
