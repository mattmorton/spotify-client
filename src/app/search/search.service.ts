import { BehaviorSubject, from, of, Subject } from 'rxjs';

export class SearchService {

  private _searchTerm = new Subject<string>()
  private _searchHistory = new BehaviorSubject<any>(new Set());
  public searchTerm = this._searchTerm.asObservable();
  public searchHistory = this._searchHistory.asObservable();

  constructor() {

  }

  public updateSearchTerm(searchTerm: string) {
    this._searchHistory.next(searchTerm)
    this._searchTerm.next(searchTerm);
  }

  public clearSearchTerm() {
    this._searchTerm.next(undefined)
  }

}
