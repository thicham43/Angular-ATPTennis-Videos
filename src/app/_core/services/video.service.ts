import { Injectable } from '@angular/core';
import { Video } from 'src/app/_core/models/video';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { SearchListResponse } from 'src/app/_core/models/youtube-api-v3.models';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  API_KEY = environment.googleApiKey;
  ROOT_URL = "https://youtube.googleapis.com/youtube/v3/search?part=snippet,id&order=date&maxResults=50"
  CHANNEL_ID = "UCY_5h5zaSwN7Or4kIJDYNXA";

  constructor(private http: HttpClient) { }

  fetchVideos(): Observable<Video[]> {
    return this.http.get<SearchListResponse>(`${this.ROOT_URL}&channelId=${this.CHANNEL_ID}&key=${this.API_KEY}`)
           .pipe(map((res) => res.items!.map((playlistItem) =>
                                ({
                                  videoId: playlistItem.id!.videoId,
                                  title: playlistItem.snippet!.title,
                                  description: playlistItem.snippet!.description,
                                  publishedAt: playlistItem.snippet!.publishedAt,
                                  thumbnailUrl: playlistItem.snippet!.thumbnails!.high!.url,
                                } as Video)
                )),
                catchError((e) => {
                  console.log(e);
                  return of([]);
                }));

  }
}
