import React from "react";
import "./app.css";
import Navbar from "./Componentes/NavBar/Navbar.js";
import Home from "./Componentes/Home/Home.js";
import Footer from "./Componentes/Footer/Footer.js";
import { useEffect, useState } from "react";
// import Login from "./Componentes/Login/SignIn.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from "./Componentes/MovieDetails/MovieDetails";
import Favorite from "./Componentes/Favorite/Favorite.js";
import Result from "./Componentes/Search/Result.js";
// import SignIn from "./Componentes/Login/SignIn.js";

function App() {

  const [favorites,setFavorites]=useState([])

useEffect(() =>{

    const favInLocal =  localStorage.getItem('favs')
    console.log(favInLocal)
    if (favInLocal != null) {
        const favsArray = JSON.parse(favInLocal)
        setFavorites(favsArray)
        console.log(favsArray)
    }
},[])

  const addOrRemoveFromFavs = e =>{

    console.log(e)
    const favMovies =  localStorage.getItem('favs')

    let tempMoviesFavs;
 
    if(favMovies === null){
       tempMoviesFavs = []
 
    }else{
 tempMoviesFavs = JSON.parse(favMovies)
    }
 console.log(
   tempMoviesFavs
 )

  
    const btn = e.currentTarget;
    const parent = btn.parentElement;
    const imgURL = parent.querySelector('img')?.getAttribute('src');
    console.log(imgURL)
    const titulo = parent.querySelector('h4');
    const overview = parent.querySelector('p');
   
   
    const movieData = {
      imgURL,titulo,overview,
      id : btn.dataset['movieId']
    }
    
    let movieInArray = tempMoviesFavs.find(oneMovie =>{
      return oneMovie.id === movieData.id
    })
   if (!movieInArray) {
      
       tempMoviesFavs.push(movieData)
   localStorage.setItem('favs', JSON.stringify(tempMoviesFavs))
   setFavorites(tempMoviesFavs)
   console.log('Se Agrego la pelicula')
  
  }else{
    let movieLeft = tempMoviesFavs.filter(oneMovie => {
      return oneMovie.id !== movieData.id
    })
    localStorage.setItem('favs', JSON.stringify(movieLeft))
    setFavorites(movieLeft)
    console.log('Se Elimino la pelicula')
  }
   
  }

  return (
    <BrowserRouter>
      <Navbar />

     

      <Routes>
         <Route path="/" element={<Home addOrRemoveFromFavs={addOrRemoveFromFavs}/>}/>
   
        <Route path="/Favorito" element={<Favorite favorites ={favorites} addOrRemoveFromFavs={addOrRemoveFromFavs}/> } />
 
        <Route path="/MovieDetails" element={<MovieDetails addOrRemoveFromFavs={addOrRemoveFromFavs}/>}/>

        <Route path="/Result" element={<Result addOrRemoveFromFavs={addOrRemoveFromFavs}/>}/>
        
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
