import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {
constructor(private sanitzer : DomSanitizer){}
  transform(video: any) {
    return this.sanitzer.bypassSecurityTrustResourceUrl(video);
  }

}
