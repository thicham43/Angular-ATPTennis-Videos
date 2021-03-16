import { Component, OnInit, Input } from '@angular/core';
import { Video } from 'src/app/_core/models/video';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {

  @Input() videos: Video[] | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
