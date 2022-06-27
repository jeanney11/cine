import React from 'react';
import { Carousel } from 'react-carousel-minimal';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';







function AddNow(props) {
  const [rateMovie, setRateMovie] = useState([]);
  
  
  useEffect(() => {
    const endPonint =
      "https://api.themoviedb.org/3/discover/movie?api_key=2d042291f5d9997fd302638a2ac82ed8&language=es-ES&page=1";
    axios
      .get(endPonint)
      .then((response) => {
        console.log(response);
        const prueba = []
        const apiData = response.data.results;
        // cgl de apidata se convierte en la actualizacion del estado

        apiData.map(item =>{
          prueba.push(item.backdrop_path)
        })
        setRateMovie(prueba);
      })


  }, [setRateMovie]);
  
  console.log(rateMovie);


  const data = [
    {
      image: "https://elpopular.cronosmedia.glr.pe/original/2022/03/12/621cf4a77841311020324106.jpg",
      caption: "Morbius"
    },
    {
      image: "https://www.guatemala.com/fotos/2022/02/Estreno-de-la-pelicula-The-Batman-en-Guatemala-Marzo-2022-885x500.png",
      caption: "Batman"
    },
    {
      image: "https://moviesroom.pl/wp-content/uploads/2022/05/Top-Gun-Maverick.jpg",
      caption: "Top Gun"
    },
    {
      image: "https://www.cinepremiere.com.mx/wp-content/uploads/2021/12/Avatar-2-James-Cameron-peliculas-2022-900x506.jpg",
      caption: "Avatar"
    },
    {
      image: "https://phantom-marca.unidadeditorial.es/8085812b4fc214a7c7deca3e52d605a2/resize/1200/f/webp/assets/multimedia/imagenes/2022/02/11/16445345407827.jpg",
      caption: "Jurasic World"
    },
    {
      image: "https://m.cinesargentinos.com.ar/static/archivos/56370",
      caption: "Los Secretos de Dumbledore"
    },
    {
      image: "https://media.vandal.net/i/1200x630/12-2021/2021121515523463_1.jpg",
      caption: "Uncharted"
    },
    {
      image: "https://phantom-marca.unidadeditorial.es/bb80c3bd0d9d9027aa526ec95e271326/resize/1320/f/jpg/assets/multimedia/imagenes/2022/06/13/16551302986436.jpg",
      caption: "LightYear"
    },
    {
      image: "https://eus-www.sway-cdn.com/s/ySQJgFqWsreA5mGw/images/gWMAwJ8DtrT438?quality=1920&allowAnimation=true",
      caption: "La Ciudad Perdida"
    }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }

  
  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <h2 className='titleDetails'>Películas Recomendadas</h2>
        {/* <p>Easy to use, responsive and customizable carousel component for React Projects.</p> */}
        <div style={{
          padding: "0 5px"
        }}>
          
          <Carousel
            data={data}
            time={2000}
            width="1600"
            height="350px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "1600px",
              maxHeight: "500px",
              margin: "20px 0",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default AddNow;