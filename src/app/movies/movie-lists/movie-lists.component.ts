import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieModel } from 'app/core/model/movie.model';
import { MoviesService } from 'app/core/services/movies.service';

@Component({
  selector: 'app-movie-lists',
  templateUrl: './movie-lists.component.html',
  styleUrls: ['./movie-lists.component.scss']
})
export class MovieListsComponent implements OnInit {
  movies$: Observable<undefined | MovieModel[]>;

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.movies$ = this.moviesService.getCollectionData('films');
  }
}
