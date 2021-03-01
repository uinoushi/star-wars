import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { MovieModel } from '../model/movie.model';

@Injectable()
export class MoviesService {
  keys = ['films', 'characters', 'planets', 'residents']

  constructor(protected httpClient: HttpClient) { }

  getCollectionData(entity: string): Observable<MovieModel[]> {
    return this.httpClient.get<MovieModel[]>(`${environment.api}${entity}/`)
      .pipe(
        map((response: any) => response['results']),
        catchError(this.handleError)
      );
  }

  getItemData(entity: string): Observable<MovieModel> {
    return this.httpClient.get<MovieModel>(`${environment.api}${entity}/`)
      .pipe(
        catchError(this.handleError)
      );
  }

  getRelatedData(api: string): Observable<any> {
    return this.httpClient.get<any>(this.convertHttps(api))
      .pipe(
        catchError(this.handleError)
      );
  }

  getDataBankEntityList(stream: any) {
    return forkJoin(stream)
      .pipe(
        map((res) => res),
        catchError(this.handleError)
      );
  }

  generateCombineList(data: any) {
    return this.keys
      .filter((key) => data[key])
      .map((key) => this.getDataBankEntityList(this.createEventStream(data[key])))
  }

  searchFilms(term: string): Observable<MovieModel[]> {
    return this.httpClient.get<MovieModel[]>(`${environment.api}films/?search=${term}`).pipe(
      map((response: any) => response['results']),
      catchError(this.handleError)
    );
  }

  private createEventStream(apis: string[]) {
    return apis.map((api: string) => this.getRelatedData(api))
  }

  private handleError(error: HttpErrorResponse) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return Observable.throw(errMessage);
    }

    return Observable.throw(error || 'server error');
  }

  // API requires https but returns hypermedia links that are http://. Fixing that.
  private convertHttps(url: string) {
    if (url) {
      return url.replace('http://', 'https://');
    }

    return url;
  }
}
