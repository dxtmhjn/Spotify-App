import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public spotifyUrl = 'https://accounts.spotify.com/authorize?client_id=76ddfd5f963f4d039490c07f73b1f101&response_type=token&redirect_uri=https%3A%2F%2Fwww.examuncle.com&scope=user-read-private%20user-read-email&state=34fFs29kd09';
  public accessToken;
  constructor( private route: ActivatedRoute) { }

  ngOnInit() {
    var regex = /\=(.*?)\&/;
    var url=window.location.href;
    if(window.location.href.indexOf("state") > -1) {
    this.accessToken = regex.exec(url)[1];
    console.log(window.location.search);
    localStorage.setItem("Spotify_Access_Token", this.accessToken);
    window.location.href="https://www.examuncle.com/music"
   }
    
  }

  processLogin() {
    window.location.href = this.spotifyUrl;
  }

}
