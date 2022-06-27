import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Link as LinkRouter } from "react-router-dom";
import swal from "sweetalert";
import Ranking from "./Ranking.js";
import "../Ranking/starFilter.css"


function StartFilter(props) {
    
    // const start = JSON.parse(localStorage.getItem('filtromovie'))
    // console.log(start);

    let token =sessionStorage.getItem('token');
 const [start,setStart]=useState([])
  useEffect(()=>{

  const endPonint='https://api.themoviedb.org/3/discover/movie?api_key=2d042291f5d9997fd302638a2ac82ed8&language=es-ES&page=1'
  axios.get(endPonint)
  .then(response=>{
    const apiData= response.data;
    // cgl de apidata se convierte en la actualizacion del estado
    setStart(apiData.results)
  })  

//   .catch(error=>{
//      swal(<h1>Tuvimos Errores, intenta mas tarde</h1>) 
//  })
    
},[setStart])

    

    return(
        <>
       
        <div>
        <h2 className="titleDetails">
          Average
          <Ranking/>
        </h2>
        
        <div className="bodyStar" >
          {start.map((startOne, ix) => {
            return (
              
              <div className="cardsResults" key={ix}>
                
                <div className="imgResults">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${startOne.poster_path}`}
                    className="cardImgResults"
                    alt="..."
                  />
                  <div className="cardbodyResults">
                    <h5 className="titleResults">{startOne.title.substring(0, 20)} ...{" "}</h5>
                    <p style={{ textAlign: "justify", padding: "5px 5px", color: "#fff"}}>
                      {startOne.overview.substring(0, 20)} ...{" "}
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