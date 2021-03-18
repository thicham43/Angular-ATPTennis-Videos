import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-yt-video-player',
  templateUrl: './yt-video-player.component.html',
  styleUrls: ['./yt-video-player.component.scss']
})
export class YtVideoPlayerComponent {

  @Input() videoId: string | undefined = undefined;

}
