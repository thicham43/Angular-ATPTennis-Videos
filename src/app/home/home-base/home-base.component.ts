import { Component } from '@angular/core';
import { Video } from 'src/app/_core/models/video';
import { VideoService } from 'src/app/_core/services/video.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface HomeVideos {
  newestVideo: Video;
  videoList: Video[];
}

@Component({
  selector: 'app-home-base',
  templateUrl: './home-base.component.html',
  styleUrls: ['./home-base.component.scss']
})
export class HomeBaseComponent {

  videos$: Observable<HomeVideos>;

  constructor(private videoService: VideoService) {
    this.videos$ = this.videoService.fetchVideos()
                    .pipe(map((res) => { return { newestVideo: res[0],
                                                  videoList: res.slice(1) 
                                                };
                                        }));
  }

}
