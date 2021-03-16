import { Component } from '@angular/core';
import { Video } from 'src/app/_core/models/video';
import { Observable } from 'rxjs';
import { VideoService } from 'src/app/_core/services/video.service';
import { map } from 'rxjs/operators';

interface HomeVideos {
  newestVideo: Video;
  videoList: Video[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'atptennis-videos';
  videos$: Observable<HomeVideos>;

  constructor(private videoService: VideoService) {
    this.videos$ = this.videoService.fetchVideos()
                  .pipe(map((res) => { return { newestVideo: res[0],
                                                videoList: res.slice(1) 
                                              };
                                      }));
  }
}
