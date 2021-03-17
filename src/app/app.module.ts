import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './_shared/header/header.component';
import { FooterComponent } from './_shared/footer/footer.component';
import { VideoItemComponent } from './home/video-item/video-item.component';
import { VideoListComponent } from './home/video-list/video-list.component';
import { VideoFeaturedComponent } from './home/video-featured/video-featured.component';
import { HomeBaseComponent } from './home/home-base/home-base.component';
import { SafePipe } from './tools/safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    VideoItemComponent,
    VideoListComponent,
    VideoFeaturedComponent,
    HomeBaseComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
