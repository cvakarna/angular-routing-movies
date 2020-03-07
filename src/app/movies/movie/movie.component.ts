import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../movies.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie: { id: number, name: string, status: string };

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
}
