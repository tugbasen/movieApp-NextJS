import axios from "axios";

import MovieDetail from "../../components/movieDetail/MovieDetails";

export default function MovieDetailPage(props) {
  const { movie, casts } = props
  // console.log(movie)
  // console.log(casts)
  return (
    <MovieDetail movie={movie} casts={casts} />
  );
}

export async function getStaticProps(context) {
  const { id } = context.params

  const res = await axios(`https://api.themoviedb.org/3/movie/${id}?api_key=4f298a53e552283bee957836a529baec`)
  const movie = res.data

  const response = await axios(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=4f298a53e552283bee957836a529baec`)
  const casts = response.data.cast

  return {
      props: {
        movie,
        casts
      }
  }
}

export async function getStaticPaths() {
  const res = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=4f298a53e552283bee957836a529baec`)
  const movies = res.data.results

  const ids = movies.map(movie => movie.id)
  const paths = ids.map(id => ({ params: { id : id.toString() }} ))

  return {
    paths,
    fallback: false
  }
}