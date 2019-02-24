import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataSharingService {
    private data: BehaviorSubject<any> = new BehaviorSubject([]);
    private tracks: BehaviorSubject<any> = new BehaviorSubject({});
    private songId: BehaviorSubject<any> = new BehaviorSubject((null));

    setSearchData(data: any) {
        this.data.next(data);
    }

    getSearchData(): any {
        return this.data;
    }

    setSearchTracks(data: any) {
        this.tracks.next(data);
    }

    getSearchTracks(): any {
        return this.tracks;
    }

    setSong(data: any) {
        this.songId.next(data);
    }

    getSong(): any {
        return this.songId;
    }
}
