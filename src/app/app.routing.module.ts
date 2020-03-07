import { HomeComponent } from "./home/home.component";
import { MoviesComponent } from "./movies/movies.component";
import { MovieComponent } from "./movies/movie/movie.component";
import { EditMovieComponent } from "./movies/edit-movie/edit-movie.component";
import { UsersComponent } from "./users/users.component";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

const routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    {
        path: 'movies', component: MoviesComponent, children: [
            { path: ':id', component: MovieComponent },
            { path: ':id/:edit', component: EditMovieComponent },
        ]
    },

    { path: 'users', component: UsersComponent },

    { path: '**', redirectTo: '' }

]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {



}