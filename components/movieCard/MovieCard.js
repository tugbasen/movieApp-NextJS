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

function MovieCard({ movies }) {
  const WhiteTextTypography = withStyles({
    root: {
      color: "#FFFFFF",
    },
  })(Typography);
  return (
    <Link href={`/movie/${movies.id}`}>
      <div className="card shadow mb-5 bg-body rounded">
        <div>
          <Image
            src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`}
            width={500}
            height={700}
            className="card-img-top"
          />
          <span>
            <Box position="relative" display="inline-block" className={classes.score}>
              <Box position="absolute">
                <CircularProgress
                  className={classes.firstCircule}
                  size={50}
                  variant="determinate"
                  value={100}
                />
              </Box>
              <CircularProgress
                size={50}
                className={classes.circule}
                variant="determinate"
                value={movies.vote_average * 10}
              />
              <Box
                top={0}
                left={0}
                bottom={0}
                right={0}
                position="absolute"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <WhiteTextTypography style={{ fontSize: "13px" }} variant="h6">
                  {`${movies.vote_average * 10}`}
                  <AiOutlinePercentage style={{ paddingBottom: "5px" }} />
                </WhiteTextTypography>
              </Box>
            </Box>
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
