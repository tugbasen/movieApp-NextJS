import MovieList from "../components/movieList/MovieList";

import MovieFilters from "../components/movieFilters/MovieFilters";

export default function HomePage({movies}) {
   // console.log(movies)
  return (
    <div className="container">
      <div className="row">
        <div className="col-2">
          <MovieFilters />
        </div>
        <div className="col-10">
          <MovieList movies={movies} />
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = async() => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=4f298a53e552283bee957836a529baec`)
    const data = await res.json()
    const movies = await data.results

    return {
        props: {
            movies,
        }
    }
}