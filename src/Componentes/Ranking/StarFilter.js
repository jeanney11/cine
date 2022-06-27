import React from "react";
import { Link, Link as LinkRouter } from "react-router-dom";
import Ranking from "./Ranking.js"

function StartFilter(params) {
    
    const start = JSON.parse(localStorage.getItem('filtromovie'))
    console.log(start);

    

    return(
        <>
        <Ranking/>
        <div>
        <h2 className="titleDetails">
          {/* Search: <em>{keyword}</em> */}
        </h2>
        
        <div className="bodyResults">
          {start.map((oneMovie, idx) => {
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
                    {/* <Link to={`/detailsMovie?ID=${oneMovie.id}`} className="btn btn-primary">View detail</Link> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
        
      </>
    )
}

export default StartFilter;