import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { MoviesService } from './movies.service';

fdescribe('MoviesService', () => {
  let service: MoviesService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [MoviesService]
    });
    service = TestBed.inject(MoviesService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  fdescribe('MoviesService', () => {
    it('should call getMovies with the correct URL', () => {
      const url = 'https://swapi.dev/api/films/';
      service.getCollectionData('films').subscribe();

      const request = httpTestingController.expectOne(url);
      httpTestingController.verify();

      expect(request.request.url).toEqual(url);
    });

    it('should call getMovie with the correct URL', () => {
      const url = 'https://swapi.dev/api/films/2/';
      service.getItemData('films/2').subscribe();

      const request = httpTestingController.expectOne(url);
      httpTestingController.verify();

      expect(request.request.url).toEqual(url);
    });
  })
});
