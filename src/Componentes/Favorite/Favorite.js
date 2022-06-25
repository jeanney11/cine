import React from "react";
import { Link } from "react-router-dom";

function Favorite (props) {
 

  return (
      <>
       <h2 className="titleDetails">Favorites</h2>
       <div className="row">
         {!props.favorites.length && <h2> No tenes nada en favoritos </h2>}
     {props.favorites.map((movieOne,idx)=>{
         return(
         
          <div className="col-3" key={idx}>
            <div className="card my-4">
              <img src={movieOne.imgURL} className="card-img-top" alt="..." />
              
              <button className="favourite-btn" onClick={(e) =>props.addOrRemoveFromFavs(e)} 
              data-movie-id ={movieOne.id}
              >🖤</button>
              <div className="card-body">
                <h5 className="card-title">{movieOne.titulo}</h5>
                <p className="card-text">{movieOne.overview} ... </p>
                <Link to={`/MovieDetails?ID=${movieOne.id}`} className="btn btn-primary">View detail</Link>
              </div>
            </div>
          </div>
        
         )
       })
     }
     </div>
      </>
   
  )
}

export default Favorite;