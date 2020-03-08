import { Movie } from "../util/movie";

export class MoviesService {
  private movies = [
    new Movie('Kushi', 1, 'https://www.filmibeat.com/img/190x100x237/popcorn/movie_posters/kushi-5102.jpg', '2001 ‧ Drama/Action', 'Siddhu and Madhu are college friends who also help two lovers unite. But their friendship is marred due to a misunderstanding.', 'i8uptlNuy-s'),
    new Movie('Okkadu', 2, 'https://pbs.twimg.com/media/ENFY_-tU0AECYHa.jpg', '2003 ‧ Action/Romance ‧ 2h 51m', 'Ajay is in Kurnool for a Kabaddi match when he happens to save Swapna from a brutal factionist, Obul Reddy. The latter pursues them but Ajay refuses to back down from a confrontation with him.', 'uRbKSPsLwEw'),
    new Movie('Pokiri', 3, 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b2/Pokiri_movie_poster.jpg/220px-Pokiri_movie_poster.jpg', '2006 ‧ Thriller/Action ‧ 2h 48m', 'Krishna, a police officer, disguises himself as a thug and joins the mafia in order to wipe out the underworld. Meanwhile, he falls in love with Shruti, an aerobics teacher.', 'F1mTF3Ayy8g'),
  ];

  getMovies() {
    return this.movies;
  }

  getMovie(id: number) {
    const movie = this.movies.find(
      (s) => {
        return s.id === id;
      }
    );
    return movie;
  }

  updateMovie(id: number, movieInfo: Movie) {
    let movie = this.movies.find(
      (m) => {
        return m.id === id;
      }
    );
    if (movie) {
      movie = movieInfo
    }
  }
}
