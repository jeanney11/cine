import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import swal from "sweetalert";
import { Container, Radio, Rating } from "../Ranking/RatingStyles";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";



function Rate() {
  const [rate, setRate] = useState(0);
  const navegacion = useNavigate();
  console.log(rate);

  const [rateMovie, setRateMovie] = useState([]);
  const [filterMovie, setfilterMovie] = useState([]);
  useEffect(() => {
    const endPonint =
      "https://api.themoviedb.org/3/discover/movie?api_key=2d042291f5d9997fd302638a2ac82ed8&language=es-ES&page=1";
    axios
      .get(endPonint)
      .then((response) => {
        console.log(response);
        const apiData = response.data.results;
        // cgl de apidata se convierte en la actualizacion del estado


        setRateMovie(apiData);
      })


  }, [setRateMovie]);

  
  console.log(rateMovie) // array vote_average

  

console.log(filterMovie);


  return (
    <Container>
      {[...Array(5)].map((item, index) => {
        const givenRating = index + 1;

        return (
          <label>
            <Radio
              type="radio"
              value={givenRating}
              onClick={() => {
                setRate(givenRating);
                // if (rate == 1) {
                //   console.log("hola");
                // }
                switch (rate) {
                  case 1:setfilterMovie(
                    rateMovie.filter(item =>{
                      if (item.vote_average <= 2) {
                        console.log(item);
                      }
                    }))
            
              
                    break; // al encontrar este 'break' no se continuará con el siguiente 'default:'
              
                  case 2:setfilterMovie(
                    rateMovie.filter(item =>{
                      if (item.vote_average > 2 && item.vote_average <=4) {
                        console.log(item);
                       
                      }
                    }))
                    break;
                  case 3:
                    setfilterMovie(
                    rateMovie.filter(item =>{
                      if (item.vote_average > 4 && item.vote_average <=6) {
                        console.log(item);
                      }
                    }))
                    break;
                  case 4:
                    setfilterMovie(
                    rateMovie.filter(item =>{
                      if (item.vote_average > 6 && item.vote_average <=8) {
                        // console.log(item.poster_path);
                        
                        return item
                       navegacion("/StarFilter" );
                        
                        
                      }
                    }))
                    break;
                  case 5:
                    setfilterMovie(
                    rateMovie.filter(item =>{
                      if (item.vote_average > 8 && item.vote_average <=10) {
                        console.log(item);
                      }
                    }))
                    break;
              
                  default:
                    console.log('default')
                  // fall-through
              
                }
                console.log(rateMovie);
                
                //swal(`Are you sure you want to give ${givenRating} stars ?`);
                localStorage.setItem('filtromovie', JSON.stringify(filterMovie))
                navegacion(`/StarFilter`);
                console.log(filterMovie)

              }}
            />
            <Rating>
              <FaStar value={{ size: "5em" }}
                color={
                  givenRating < rate || givenRating === rate
                    ? "rgb(255, 255, 0)"
                    : "rgb(192,192,192)"
                }
              />
            </Rating>
          </label>
        );
      })}
    </Container>
  );
}

export default Rate;