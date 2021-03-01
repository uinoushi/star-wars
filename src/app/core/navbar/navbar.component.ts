import { Component, OnInit } from '@angular/core';
import { MovieModel } from '@core/model/movie.model';
import { MoviesService } from '@core/services/movies.service';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navbarOpen = false;
  faSearch = faSearch;
  faBars = faBars;

  private searchTermSubject = new Subject<string>();

  readonly films$ = this.searchTermSubject.pipe(
    debounceTime(250),
    distinctUntilChanged(),
    switchMap(term => this.moviesService.searchFilms(term))
  );


  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  search(term: string) {
    this.searchTermSubject.next(term);
  }

  navigate(film: MovieModel) {
    window.location.href = `/movies/${this.parseModelId(film.url)}`;
  }

  parseModelId(modelId: string): string {
    if (modelId) {
        return modelId.split('/').reduce((id: string, potentialId: string) => (potentialId ? potentialId : id), '');
    }

    return '';
  }

}
