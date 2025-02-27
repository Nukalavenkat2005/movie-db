import React from "react";
import { useParams, Link } from "react-router-dom";
import useFetch from "./useFetch";

const placeholderImage = "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const SingleMovie = () => {
  const { id } = useParams();
  const { isLoading, error, data: movie } = useFetch(`&i=${id}`);

  console.log("Movie ID:", id); // Debugging

  if (isLoading) {
    return <div className="loading">Loading movie details...</div>;
  }

  if (error.show) {
    return (
      <div className="page-error">
        <h1>{error.msg}</h1>
        <Link to="/" className="btn">Back to Home</Link>
      </div>
    );
  }

  if (!movie || Object.keys(movie).length === 0) {
    return (
      <div className="page-error">
        <h2>Movie not found!</h2>
        <Link to="/" className="btn">Back to Home</Link>
      </div>
    );
  }

  const { Poster: poster, Title: title, Plot: plot, Year: year, Genre, Runtime, imdbRating } = movie;

  return (
    <section className="single-movie">
      <img src={poster !== "N/A" ? poster : placeholderImage} alt={title} />
      <div className="single-movie-info">
        <h2>{title} ({year})</h2>
        <p><strong>Genre:</strong> {Genre}</p>
        <p><strong>Runtime:</strong> {Runtime}</p>
        <p><strong>IMDB Rating:</strong> ⭐ {imdbRating}</p>
        <p>{plot}</p>
        <Link to="/" className="btn">Back to Home</Link>
      </div>
    </section>
  );
};

export default SingleMovie;
