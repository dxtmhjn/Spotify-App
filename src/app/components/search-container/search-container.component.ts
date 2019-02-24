import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataSharingService } from '../../providers/dataSharing.service';
import { SpotifyService } from '../../providers/spotify.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.scss']
})
export class SearchContainerComponent implements OnInit {

  searchData: any[] = [];
  getSongs = {};
  preloading: boolean = true;
  message: string;
  error: boolean= false;
  hideSearchValue = true;
  showTracksValue = true;

  @Output() hideSearch: EventEmitter<any> = new EventEmitter();
  @Output() showTracksArea: EventEmitter<any> = new EventEmitter();

  constructor(
    private _spotifyService: SpotifyService,
    private _dataSharing: DataSharingService
    ) {

  }

  getTracks(txt) {
    this._spotifyService.getTracksbyAlbum(txt)
    .subscribe(
      (data: any) => {
        this.getSongs = data;
        this.preloading = false;
        // console.log(this.getSongs);
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
    this._dataSharing.getSearchData()
    .subscribe(
      (data: any) => {
        this.searchData = data;
        this.preloading = false;
        
        // console.log(this.searchData);
      }, (error) => {
        this.preloading = false;
        this.error = true;
        this.message = error.error.error.message;
        console.log(error.error.error.message);
      });
  }

  hideSearchArea() {
    this.hideSearch.emit(this.hideSearchValue);
  }

}
