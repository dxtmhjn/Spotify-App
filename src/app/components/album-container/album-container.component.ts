import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataSharingService } from '../../providers/dataSharing.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-album-container',
  templateUrl: './album-container.component.html',
  styleUrls: ['./album-container.component.scss']
})
export class AlbumContainerComponent implements OnInit {
  getSongs;
  preloading: boolean = true;
  message: string;
  error: boolean= false;
  showPlayerValue = true;
  

  @Output() showPlayer: EventEmitter<any> = new EventEmitter();

  constructor(private _dataSharing: DataSharingService) {
   }

   playSong(txt) {
     this._dataSharing.setSong(txt);
     this.showPlayer.emit(this.showPlayerValue);
   }

   millisToMinutesAndSeconds = (millis) => {
    let minutes = Math.floor(millis / 60000);
    let seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < '10' ? '0' : '') + seconds;
  }
  

  ngOnInit() {
    this._dataSharing.getSearchTracks()
    .subscribe(
      (data: any) => {
        this.getSongs = data;
        this.preloading = false;
        // console.log(this.getSongs);
      }, (error) => {
        this.preloading = false;
        this.error = true;
        this.message = error.error.error.message;
        console.log(error.error.error.message);
      });

      $(".close-album-area-tablet").click(function(){
        $(".new-release").removeClass("tablet");
      });
  }

}
