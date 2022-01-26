import { Pipe, PipeTransform } from '@angular/core';
import { PhotoResponse } from "./models/photo-response";

@Pipe({
  name: 'imageUrl'
})
export class ImageUrlPipe implements PipeTransform {

  transform(photo: PhotoResponse): string {
    return photo ? `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg` : '';
  }

}
