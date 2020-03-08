import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/util/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie: Movie;

  constructor(private moviesService: MoviesService, private route: ActivatedRoute, private router: Router) {


  }

  ngOnInit() {

    this.route.params.subscribe(pa => {
      let movieId = +pa['id'];
      this.movie = this.moviesService.getMovie(movieId);
    })
  }

  OnEdit() {
    this.router.navigate(['edit'], { relativeTo: this.route, queryParamsHandling: 'preserve' })
  }
  onWatch() {
    this.router.navigate(['watch'], { relativeTo: this.route, queryParamsHandling: 'preserve' })
  }
}
