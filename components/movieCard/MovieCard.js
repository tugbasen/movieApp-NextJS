import classes from "./MovieCard.module.css";
import Link from "next/link";
import Image from "next/image";
import {
  CircularProgress,
  Typography,
  withStyles,
  Box,
} from "@material-ui/core";
import { AiOutlinePercentage } from "react-icons/ai";
import MovieScore from "./MovieScore";

function MovieCard({ movies }) {
  const WhiteTextTypography = withStyles({
    root: {
      color: "#FFFFFF",
    },
  })(Typography);
  return (
    <Link href={`/movie/${movies.id}`} className={classes.linkTag}>
      <div className="card shadow mb-5 bg-body rounded">
        <div>
          <Image
            src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}
            width={500}
            height={800}
            className="card-img-top"
          />
          <span>
            <MovieScore movies={movies} />
          </span>
        </div>
        <div className="card-body" style={{ paddingBottom: 10, paddingTop: 1 }}>
          <p className="card-title">
            <b>{movies.title}</b>
          </p>
          <p className="card-text">{movies.release_date}</p>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
