import React from "react";
import "../MovieDetails/movieDetails.css";
import { useEffect, useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import Ranking from '../Ranking/Ranking.js';
//import { FaBeer } from 'react-icons/fa';

function MovieDetails(props) {
  let token = sessionStorage.getItem("token");

  let query = new URLSearchParams(window.location.search);
  let ID = query.get("ID");

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/movie/${ID}?api_key=2d042291f5d9997fd302638a2ac82ed8&language=es-ES`;

    axios
      .get(endPoint)
      .then((response) => {
        const moviData = response.data;

        setMovie(moviData);
      })

      .catch((error) => {
        console.log("Tuvimos Errores, intenta mas tarde");
      });
  }, [ID]);

  //const colorHearth=movie? "★":"⭐";
  const colorHearth = async (e) => {
    const token = localStorage.getItem("token");
  };

  return (
    <div className="bodyMovieDetails">
      {!movie && <p>charging...</p>}
      {movie && (
        <div className="bodyMovieDetails">
          <div className="col-4">
            {" "}
            <img
              className="img-fluid"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt="movieposter"
            />
          </div>
          <div className="col-8">
            <h2 className="titleDetails">{movie.title}</h2>
            <h2 className="subtitle">Fecha de Estreno: {movie.release_date}</h2>
            <h2 className="subtitle">Reseña:</h2>
            <p className="parraDetails"> {movie.overview}</p>
            <h2 className="subtitle">Rating: {movie.vote_average}</h2>

            <Ranking/>
            <div>
              <button
                className="favourite-btn"
                onClick={(e) => {props.addOrRemoveFromFavs(e);
                  swal({
                    icon: "success",
                  });  
                }}
                
                
                data-movie-id={movie.id}>Favorite
                
              </button>
              {/* <a>{movie.length}</a> */}
            </div>
            

            <h2 className="subtitle">Generos:</h2>
            <ul className="parraDetails">
              {movie.genres.map((oneGeneres) => (
                <li key={oneGeneres.id}>{oneGeneres.name}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieDetails;
