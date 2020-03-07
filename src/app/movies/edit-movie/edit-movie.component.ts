import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {
  movie: { id: number, name: string, status: string };
  movieName = '';
  movieStatus = '';

  constructor(private moviesService: MoviesService, private route: ActivatedRoute) { }

  ngOnInit() {
    let movieId = +this.route.snapshot.params['id'];
    this.movie = this.moviesService.getMovie(movieId);
    this.movieName = this.movie.name;
    this.movieStatus = this.movie.status;
  }

  onUpdateMovie() {
    this.moviesService.updateMovie(this.movie.id, { name: this.movieName, status: this.movieStatus });
  }

}
