import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, switchMap, tap } from 'rxjs/operators';
import { LoaderService } from '../core/loader/loader.service';
import { SpotifyService } from '../core/spotify/spotify.service';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  search = new FormControl('');
  searchTerm$: Observable<string>;
  searchResponse$: Observable<SpotifyApi.SearchResponse>;
  loading$: BehaviorSubject<boolean>
  // searchHistory$: Observable<any>;

  constructor(private spotifyService: SpotifyService, private searchService: SearchService, private loaderService: LoaderService) {
    this.searchTerm$ = this.searchService.searchTerm;
    this.loading$ = this.loaderService.loadingSub;
    this.searchService.searchHistory.subscribe((data) => {
      console.log({ data})
    })
    this.searchResponse$ = this.search.valueChanges.pipe(
      filter(val => val.length > 2 || val.length === 0),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((query) => {
        this.searchService.updateSearchTerm(query);
        return query ? this.spotifyService.search(query) : of({})
      })
    )
  }

  ngOnInit(): void {

  }

}
