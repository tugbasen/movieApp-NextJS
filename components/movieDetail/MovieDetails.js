import classes from "./MovieDetails.module.css";
import { Fragment } from "react";
import React from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsLink } from "react-icons/bs";
import MoviePreview from "./MoviePreview";

function MovieDetail({ movie }) {
  const casts = movie.cast;
  // console.log(casts)

  return (
    <div className="container">
        <MoviePreview movie={movie} />
    </div>
  );
}

export default MovieDetail;
