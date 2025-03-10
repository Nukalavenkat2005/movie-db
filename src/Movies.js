import React from "react";
import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";

const placeholderImage = "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const Movies = () => {
  const { movies, isLoading } = useGlobalContext();

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <section className="movies">
      {movies?.map((movie) => {
        const { imdbID: id, Poster: poster, Title: title, Year: year } = movie;

        return (
          <Link to={`/movies/${id}`} key={id} className="movie">
            <article>
              <img src={poster !== "N/A" ? poster : placeholderImage} alt={title} />
              <div className="movie-info">
                <h4>{title}</h4>
                <p>{year}</p>
              </div>
            </article>
          </Link>
        );
      })}
    </section>
  );
};

export default Movies;
