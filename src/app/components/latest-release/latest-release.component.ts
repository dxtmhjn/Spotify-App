import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { SpotifyService } from '../../providers/spotify.service';
import { DataSharingService } from '../../providers/dataSharing.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-latest-release',
  templateUrl: './latest-release.component.html',
  styleUrls: ['./latest-release.component.scss']
})
export class LatestReleaseComponent implements OnInit {

  newReleases: any[] = [];
  getSongs = {};
  preloading: boolean = true;
  message: string;
  error: boolean= false;
  hideSearchValue = true;
  showTracksValue = true;

  @Output() showTracksArea: EventEmitter<any> = new EventEmitter();
  constructor(
    private _spotifyService: SpotifyService,
    private _dataSharing: DataSharingService
    ){
    }

    getTracks(txt) {
      this._spotifyService.getTracksbyAlbum(txt)
      .subscribe(
        (data: any) => {
          this.getSongs = data;
          this.preloading = false;
          this._dataSharing.setSearchTracks(this.getSongs);
          this.showTracksArea.emit(this.showTracksValue);
          $(".new-release").addClass("tablet");
        }, (error) => {
          this.preloading = false;
          this.error = true;
          this.message = error.error.error.message;
          console.log(error.error.error.message);
        });
    }

  ngOnInit() {
    this._spotifyService.getNewReleases()
    .subscribe(
      (data: any) => {
        this.newReleases = data;
        this.preloading = false;
        // console.log(this.newReleases);
      }, (error) => {
        this.preloading = false;
        this.error = true;
        this.message = error.error.error.message;
        console.log(error.error.error.message);
      });
   }
}
