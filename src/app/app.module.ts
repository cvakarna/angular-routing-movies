import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { MoviesComponent } from './movies/movies.component';
import { UserComponent } from './users/user/user.component';
import { EditMovieComponent } from './movies/edit-movie/edit-movie.component';
import { MovieComponent } from './movies/movie/movie.component';
import { MoviesService } from './movies/movies.service';

import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app.routing.module';
import { WatchMovieComponent } from './movies/watch-movie/watch-movie.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    MoviesComponent,
    UserComponent,
    EditMovieComponent,
    MovieComponent,
    WatchMovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
