import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MovieModel } from 'app/core/model/movie.model';
import { MoviesService } from 'app/core/services/movies.service';

@Component({
  selector: 'app-characters-details',
  templateUrl: './characters-details.component.html',
  styleUrls: ['./characters-details.component.scss']
})
export class CharactersDetailsComponent implements OnInit {
  faEllipsisH = faEllipsisH;
  character: MovieModel = null;
  homeworld: any;
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

    this.moviesService.getItemData('people/' + id).subscribe(
      (response: MovieModel) => {
        this.character = response;
        this.moviesService.getRelatedData(this.character['homeworld']).subscribe(data => {
          this.homeworld = data
        })
        this.getDataBankEntity();
      },
      () => { }
    );
  }

  private getDataBankEntity(): void {
    this.vm$ = combineLatest(
      this.moviesService.generateCombineList(this.character)
      )
      .pipe(
        map(([films]) =>
          ({ films}))
      );
  }
}
