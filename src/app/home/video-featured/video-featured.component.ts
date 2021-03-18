import { Component, OnInit, Input } from '@angular/core';
import { Video } from 'src/app/_core/models/video';


@Component({
  selector: 'app-video-featured',
  templateUrl: './video-featured.component.html',
  styleUrls: ['./video-featured.component.scss']
})
export class VideoFeaturedComponent implements OnInit {

  @Input() video: Video | null = null;

  constructor() {}

  ngOnInit(): void {
  }

}
