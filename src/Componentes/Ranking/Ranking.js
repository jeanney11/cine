import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import swal from "sweetalert";
import { Container, Radio, Rating } from "../Ranking/RatingStyles";




function Rate () {
  const [rate, setRate] = useState(0);
  
  // const [rateMovie, setRateMovie] = useState([]);
  // useEffect(() => {
  //   const endPonint =
  //     "https://api.themoviedb.org/3/discover/movie?api_key=2d042291f5d9997fd302638a2ac82ed8&language=es-ES&page=1";
  //   axios
  //     .get(endPonint)
  //     .then((response) => {
  //       const apiData = response.data;
  //       // cgl de apidata se convierte en la actualizacion del estado
  //       setRateMovie(apiData.results);
  //     })

      
  // }, [setRateMovie]);
  
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
                swal(`Are you sure you want to give ${givenRating} stars ?`);  
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