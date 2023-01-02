import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { ChuckService } from './chuck.service';

const httpStub = {
  get: () => of([
    {
      categories: [
        "movie"
      ],
      created_at: "2020-01-05 13:42:29.855523",
      icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
      id: "dJQ2OqkBQPqfksj9maoxYQ",
      updated_at: "2020-01-05 13:42:29.855523",
      url: "https://api.chucknorris.io/jokes/dJQ2OqkBQPqfksj9maoxYQ",
      value: "Chuck Norris can beat Arnie in an Arnold Schwarzenegger Impersonation contest."
    }
  ])
}

describe('ChuckService', () => {
  let service: ChuckService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpClient,
          useValue: httpStub
        },]
    });
    service = TestBed.inject(ChuckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
