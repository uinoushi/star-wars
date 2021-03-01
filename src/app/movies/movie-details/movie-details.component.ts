import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MovieModel } from 'app/core/model/movie.model';
import { MoviesService } from 'app/core/services/movies.service';
import { FacadeService } from '@core/facade/facade.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  faEllipsisH = faEllipsisH;
  movie: MovieModel = null;
  vm$: Observable<undefined | any>;

  constructor(
    protected facade: FacadeService,
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

  openChooseUsersPopup(content: TemplateRef<HTMLElement>, action: string) {
    this.facade.ui.openPopupOverlay(content);
  }

  closeChooseUsersPopup(content: TemplateRef<HTMLElement>) {
      this.facade.ui.closePopupOverlay(content);
  }

  private fetchMovie(id: string): void {
    if (!id) {
      return;
    }

    this.moviesService.getItemData('films/' + id).subscribe(
      (response: MovieModel) => {
        this.movie = response;
        this.getDataBankEntity();
      },
      () => { }
    );
  }

  private getDataBankEntity(): void {
    this.vm$ = combineLatest(this.moviesService.generateCombineList(this.movie))
      .pipe(
        map(([characters, planets, starships, vehicles, species]) =>
          ({ characters, planets, starships, vehicles, species }))
      );
  }
}
