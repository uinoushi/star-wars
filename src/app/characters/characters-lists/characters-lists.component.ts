import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieModel } from 'app/core/model/movie.model';
import { MoviesService } from 'app/core/services/movies.service';

@Component({
  selector: 'app-characters-lists',
  templateUrl: './characters-lists.component.html',
  styleUrls: ['./characters-lists.component.scss']
})
export class CharactersListsComponent implements OnInit {
  characters$: Observable<undefined | MovieModel[]>;

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.characters$ = this.moviesService.getCollectionData('people');
  }
}
