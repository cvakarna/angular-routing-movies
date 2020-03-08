import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';
import { Movie } from 'src/app/util/movie';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-watch-movie',
  templateUrl: './watch-movie.component.html',
  styleUrls: ['./watch-movie.component.css']
})
export class WatchMovieComponent implements OnInit {

  movie: Movie;
  movieurl: string = "https://www.youtube.com/embed/";
  urlLast: string = "?rel=0&autoplay=1";
  urlSafe: SafeResourceUrl;
  constructor(public sanitizer: DomSanitizer, private route: ActivatedRoute, private moviesService: MoviesService) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      let movieId = +param['id'];
      this.movie = this.moviesService.getMovie(movieId);
      console.log(this.movie);
      this.movieurl = this.movieurl + this.movie.code + this.urlLast;
      console.log(this.movieurl);
      this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.movieurl);
    })
  }


}
