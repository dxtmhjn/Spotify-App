import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SpotifyService } from '../../providers/spotify.service';
import { DataSharingService } from '../../providers/dataSharing.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  albums: any[] = [];
  public showSearch = true;
  @Output() sendSearchValue: EventEmitter<any> = new EventEmitter();

  constructor(
    private _spotifyService: SpotifyService,
    private _dataSharing: DataSharingService
    ) { }

  ngOnInit() {
  }

  searchAlbum(txt) {
    this._spotifyService.getAlbum(txt)
    .subscribe((data: any) => {
      this.albums = data;
      this.sendSearchValue.emit(this.showSearch);
      this._dataSharing.setSearchData(this.albums);
      // console.log(this.albums);

    },
    error => {
      console.log(error);
    });
    console.log(txt);
  }

}
