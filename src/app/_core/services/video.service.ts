import { Injectable } from '@angular/core';
import { Video } from 'src/app/_core/models/video';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { SearchListResponse } from 'src/app/_core/models/youtube-api-v3.models';
import { RESPONSE_DATA } from './fake-response-data';

  @Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http: HttpClient) { }

  fetchVideos(): Observable<Video[]> {
    //return of(RESPONSE_DATA)
    return this.http.get<SearchListResponse>(`/.netlify/functions/getVideos-function`)
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
