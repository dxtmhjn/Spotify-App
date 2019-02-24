import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AlbumContainerComponent } from './components/album-container/album-container.component';
import { SearchContainerComponent } from './components/search-container/search-container.component';
import { MainBodyComponent } from './components/main-body/main-body.component';
import { LatestReleaseComponent } from './components/latest-release/latest-release.component';
import { SpotifyService } from './providers/spotify.service';
import { DataSharingService } from './providers/dataSharing.service';
import { PlayerComponent } from './components/player/player.component';
import { LoginComponent } from './components/login/login.component';
import { MusicComponent } from './components/music/music.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AlbumContainerComponent,
    SearchContainerComponent,
    MainBodyComponent,
    LatestReleaseComponent,
    PlayerComponent,
    LoginComponent,
    MusicComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
    
  ],
  providers: [
    SpotifyService,
    DataSharingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
