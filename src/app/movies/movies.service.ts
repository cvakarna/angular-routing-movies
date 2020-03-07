export class MoviesService {
  private movies = [
    {
      id: 1,
      name: 'Kushi',
      status: 'online'
    },
    {
      id: 2,
      name: 'Okkadu',
      status: 'offline'
    },
    {
      id: 3,
      name: 'Pokiri',
      status: 'offline'
    }
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

  updateMovie(id: number, movieInfo: { name: string, status: string }) {
    const movie = this.movies.find(
      (m) => {
        return m.id === id;
      }
    );
    if (movie) {
      movie.name = movieInfo.name;
      movie.status = movieInfo.status;
    }
  }
}
