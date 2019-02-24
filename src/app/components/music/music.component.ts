import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../providers/spotify.service';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public showSearch = false;
  public showLatest = true;
  public showTracks = false;
  public showDummy = true;
  public showPlayer = false;

  setSearchComponentActive(data) {
    this.showSearch = data;
    this.showLatest = false;
  }

  toggleSearchArea(data) {
    this.showSearch = false;
    this.showLatest = data;
  
  }
  toggleTrackArea(data) {
    
    this.showTracks = data;
    this.showDummy = false;
  }
  togglePlayer(data) {
    this.showPlayer = data;
  }

}
