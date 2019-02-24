import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
providedIn: 'root'
})
export class SpotifyService {

    searchResult = [];
constructor( private _http: HttpClient) { }

private url = 'https://api.spotify.com/v1/';
private accessToken = localStorage.getItem('Spotify_Access_Token');

private headers: HttpHeaders = new HttpHeaders(
    {
        'Authorization': 'Bearer ' + this.accessToken
    }
);

getNewReleases() {
return this._http.get(this.url + `browse/new-releases`, {headers: this.headers})
.pipe( map(data => data['albums'].items));
}

getAlbum(txt: string) {
return this._http.get(this.url + `search?q=${ txt }&type=album,artist&market=SV&offset=0&limit=20`, {headers: this.headers})
.pipe( map(data => data['albums'].items));
}

getTracksbyAlbum(id: string) {
return this._http.get(this.url + `albums/${id}`, {headers: this.headers});
}

getTopTracks(id: string) {
return this._http.get(this.url + `artists/${id}/top-tracks?country=us`, {headers: this.headers})
.pipe(map(data => data['tracks']))
}

}
