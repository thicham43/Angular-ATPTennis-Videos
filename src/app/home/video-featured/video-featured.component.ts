import { Component, OnInit, Input } from '@angular/core';
import { Video } from 'src/app/_core/models/video';


@Component({
  selector: 'app-video-featured',
  templateUrl: './video-featured.component.html',
  styleUrls: ['./video-featured.component.scss']
})
export class VideoFeaturedComponent implements OnInit {

  @Input() video: Video | null = null;
  yt_player_src: string = "";

  constructor() {}

  ngOnInit(): void {
    this.yt_player_src = 
    `http://www.youtube.com/embed/${this.video?.videoId}?enablejsapi=1&origin=https://atp-tennis-videos.netlify.app`
  }

}
