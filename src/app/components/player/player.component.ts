import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../../providers/dataSharing.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  songId = 'https://embed.spotify.com/?uri=';
  preloading: boolean = true;
  message: string;
  error: boolean= false;

  constructor(private _dataSharing: DataSharingService) {

   }

  ngOnInit() {
    const player = document.getElementById('spotify-player');
    this._dataSharing.getSong()
    .subscribe(
      (data: any) => {
        // this.songId = data;
        this.preloading = false;
        console.log(this.songId + data);
        // ;
        player['src'] = this.songId + data;

      }, (error) => {
        this.preloading = false;
        this.error = true;
        this.message = error.error.error.message;
        console.log(error.error.error.message);
      });
  }

}
