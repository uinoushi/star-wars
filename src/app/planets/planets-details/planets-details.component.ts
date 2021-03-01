import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MovieModel } from 'app/core/model/movie.model';
import { MoviesService } from 'app/core/services/movies.service';

@Component({
  selector: 'app-planets-details',
  templateUrl: './planets-details.component.html',
  styleUrls: ['./planets-details.component.scss']
})
export class PlanetsDetailsComponent implements OnInit {
  faEllipsisH = faEllipsisH;
  planet: MovieModel = null;
  vm$: Observable<undefined | any>;

  constructor(
    private moviesService: MoviesService, 
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.fetchMovie(this.route.snapshot.paramMap.get('id'));
  }

  navigate(url: string, page: string): void {
    this.router.navigate([page, url.match(/\d+/)[0]])
  }

  private fetchMovie(id: string): void {
    if (!id) {
      return;
    }

    this.moviesService.getItemData('planets/' + id).subscribe(
      (response: MovieModel) => {
        this.planet = response;
        this.getDataBankEntity();
      },
      () => { }
    );
  }

  private getDataBankEntity(): void {
    this.vm$ = combineLatest(this.moviesService.generateCombineList(this.planet))
      .pipe(
        map(([films, characters]) =>
          ({ films, characters }))
      );
  }
}
