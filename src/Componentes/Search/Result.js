import React from 'react';
import "../Search/search.css";
import swal from 'sweetalert';
import { Link, Link as LinkRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Result(props) {

    let query = new URLSearchParams(window.location.search);
    let keyword = query.get("keyword");
  
    const [movieResults, setMovieResults] = useState([]);
  
    useEffect(() => {
      const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=2d042291f5d9997fd302638a2ac82ed8&language=es-ES&query=${keyword}`;
      axios
        .get(endPoint)
        .then((response) => {
          const moviArray = response.data.results;
          if (moviArray.length ===0) {
              swal(<h1>We did not get any results</h1>)   
          }
          // cgl de apidata se convierte en la actualizacion del estado
          setMovieResults(moviArray);
        })
        .catch((error) => console.log(error));
    },[keyword]);
  
    return (
      <div>
        <h2 className="titleDetails">
          Search: <em>{keyword}</em>
        </h2>
       {movieResults.length === 0 && <h3 style={{color: "#fff" }}>We did not get any results</h3>}
        <div className="bodyResults">
          {movieResults.map((oneMovie, idx) => {
            return (
              <div className="cardsResults" key={idx}>
                <div className="imgResults">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`}
                    className="cardImgResults"
                    alt="..."
                  />
                  <div className="cardbodyResults">
                    <h5 className="titleResults">{oneMovie.title}</h5>
                    <p style={{ textAlign: "justify", padding: "5px 5px", color: "#fff"}}>
                      {oneMovie.overview.substring(0, 100)} ...{" "}
                    </p>
                    <Link to={`/detailsMovie?ID=${oneMovie.id}`} className="btn btn-primary">View detail</Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  
  export default Result;
  





























/* function Result(props){

    let query = new URLSearchParams(window.location.search);
  let keyword = query.get("keyword");

  const [movieResults, setMovieResults] = useState([]);

  useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=2d042291f5d9997fd302638a2ac82ed8&language=es-ES&query=${keyword}`;
    axios
      .get(endPoint)
      .then((response) => {
        const moviArray = response.data.results;
        if (moviArray.length ===0) {
            swal(<h1>No Obtuvimos Ningun Resultado</h1>)   
        }
        // cgl de apidata se convierte en la actualizacion del estado
        setMovieResults(moviArray);
      })
      .catch((error) => console.log(error));
  },[keyword]);

  return (
    <div>
        
        
      <h2>
        Buscaste:<em>{keyword}</em>
      </h2>
     {movieResults.length === 0 && <h3>No hay resultados </h3>}
      <div className="row">
        {movieResults.map((oneMovie, idx) => {
          return (
            <div className="col-4" key={idx}>
              <div className="card my-4">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{oneMovie.title}</h5>
                  <p className="card-text">
                    {oneMovie.overview.substring(0, 100)} ...{" "}
                  </p>
                  <Link to={`/MovieDetails?ID=${oneMovie.id}`} className="btn btn-primary">View detail</Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    

    </div>
  )
}

export default Result */