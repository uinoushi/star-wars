import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieModel } from 'app/core/model/movie.model';
import { MoviesService } from 'app/core/services/movies.service';

@Component({
  selector: 'app-planets-lists',
  templateUrl: './planets-lists.component.html',
  styleUrls: ['./planets-lists.component.scss']
})
export class PlanetsListsComponent implements OnInit {
  planets$: Observable<undefined | MovieModel[]>;

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.planets$ = this.moviesService.getCollectionData('planets');
  }
}
