import React from "react";
//import "../Home/home.css";
import "../Popular/popular.css";
import AddNow from "../AddNow/AddNow";
import InfoMovie from "../Info/InfoMovie"
import SignIn from "../Login/SignIn";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import swal from "sweetalert";

function Home(props) {
  let token = sessionStorage.getItem("token");
  const [moviesList, setMoviesList] = useState([]);
  useEffect(() => {
    const endPonint =
      "https://api.themoviedb.org/3/discover/movie?api_key=2d042291f5d9997fd302638a2ac82ed8&language=es-ES&page=1";
    axios
      .get(endPonint)
      .then((response) => {
        const apiData = response.data;
        // cgl de apidata se convierte en la actualizacion del estado
        setMoviesList(apiData.results);
      })

      .catch((error) => {
        swal({ text: "Tuvimos Errores, intenta mas tarde" });
      });
  }, [setMoviesList]);

  return (
    <div>
      <AddNow />
      <InfoMovie />
      {/* <SignIn/> */}

      {!token && <Link to="/" />}
      {/* estructura basica */}
      <div className="bodyCard">
        {moviesList.map((oneMovie, idx) => {
          return (
            <div className="main-container" key={idx}>
              <div className="poster-container">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`}
                  className="poster"
                />
              </div>
              <div className="ticket-container">
                <div className="ticket__content">
                  <h4 className="ticket__movie-title">{oneMovie.title}</h4>
                  <p className="ticket__movie-slogan">
                    {oneMovie.overview.substring(0, 60)} ..
                  </p>
                  {/* <p class="ticket__current-price">$20.75</p>
		<p class="ticket__old-price">$40.99</p> */}
                  
                  <Link
                    to={`/MovieDetails?ID=${oneMovie.id}`}
                    className="btn btn-primary"
                  >
                    View detail
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
