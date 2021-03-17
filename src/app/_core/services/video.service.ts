import { Injectable } from '@angular/core';
import { Video } from 'src/app/_core/models/video';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { SearchListResponse } from 'src/app/_core/models/youtube-api-v3.models';
import { RESPONSE_DATA } from './fake-response';

  @Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http: HttpClient) { }

  fetchVideos(): Observable<Video[]> {
    return this.http.get<SearchListResponse>(`/.netlify/functions/getVideos-function`)
    //return of(RESPONSE_DATA)
           .pipe(map((res) => res.items!.map((playlistItem) =>
                                ({
                                  videoId: playlistItem.id!.videoId,
                                  title: playlistItem.snippet!.title,
                                  description: playlistItem.snippet!.description,
                                  thumbnailUrl: playlistItem.snippet!.thumbnails!.high!.url,
                                  publishedAt: playlistItem.snippet!.publishedAt,
                                } as Video)
                )),
                catchError((e) => {
                  console.log(e);
                  return of([]);
                }));

  }
}
