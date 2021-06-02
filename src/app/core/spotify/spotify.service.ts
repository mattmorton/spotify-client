import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {

  private baseUrl: string = 'https://api.spotify.com/v1';
  private searchResponse = new BehaviorSubject<SpotifyApi.SearchResponse | null>(null)

  constructor(private http: HttpClient) {

  }

  getApi(path: string, params?: any) {
    const url = `${this.baseUrl}/${path}`
    const queryParams = new HttpParams({ fromObject: {...params }})
    return this.http.get<any>(url, {
      params: queryParams
    });
  }

  search(searchTerm: string): Observable<SpotifyApi.SearchResponse> {
    return this.getApi('search', {
      q: searchTerm,
      type: 'artist,album,playlist,track,show,episode'

    } as SpotifyApi.SearchForItemParameterObject)
  }

}
