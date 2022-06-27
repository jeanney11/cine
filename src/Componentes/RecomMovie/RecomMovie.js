import axios from 'axios';
import { useEffect, useState } from 'react'
import { Carousel } from 'react-carousel-minimal';

function RecomMovie() {

    let query = new URLSearchParams(window.location.search);
    let ID = query.get("ID");

    const [moviesRecomen, setMoviesRecomen] = useState([null]);
  useEffect(() => {
    const dataPonint =
      "https://api.themoviedb.org/3/discover/movie?api_key=2d042291f5d9997fd302638a2ac82ed8&language=es-ES&page=1";
    axios
      .get(dataPonint)
      .then((response) => {
        const apiData = response.data;
        // cgl de apidata se convierte en la actualizacion del estado
        setMoviesRecomen(apiData.result);
      })

      // .catch((error) => {
      //   swal({ text: "Tuvimos Errores, intenta mas tarde" });
      // });
  }, [ID]);
   
   
    // const data = 
    
    // [
    //   {
    //     image: {`url(${"https://developers.themoviedb.org/3/discover/movie-discover".poster_path})` }
        // caption: "San Francisco"
    //   },
    //   {
    //     image: "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
    //     caption: "Scotland"
    //   },
    //   {
    //     image: "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
    //     caption: "Darjeeling"
    //   },
    //   {
    //     image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
    //     caption: "San Francisco"
    //   },
    //   {
    //     image: "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
    //     caption: "Scotland"
    //   },
    //   {
    //     image: "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
    //     caption: "Darjeeling"
    //   },
    //   {
    //     image: "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
    //     caption: "San Francisco"
    //   },
    //   {
    //     image: "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
    //     caption: "Scotland"
    //   },
    //   {
    //     image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
    //     caption: "Darjeeling"
    //   }
    // ];
  
    const captionStyle = {
      fontSize: '2em',
      fontWeight: 'bold',
    }
    const slideNumberStyle = {
      fontSize: '20px',
      fontWeight: 'bold',
    }
  
    
    return (
      <>
      <div className="App">
     <div style={{ textAlign: "center" }}>
        <h2 className='titleDetails'>Películas Recomendadas</h2>
         {/* <p>Easy to use, responsive and customizable carousel component for React Projects.</p> */}
          <div style={{
            padding: "0 5px"
          }}>
             {!moviesRecomen && <p>Cargando...</p>}
            {moviesRecomen.map((recommen, i) =>{
            // <Carousel
            // //   data={data}
            // data={`https://image.tmdb.org/t/p/w500/${moviesRecomen.poster_path}`}
            //   time={2000}
            //   width="1600"
            //   height="350px"
            //   captionStyle={captionStyle}
            //   radius="10px"
            //   slideNumber={true}
            //   slideNumberStyle={slideNumberStyle}
            //   captionPosition="bottom"
            //   automatic={true}
            //   dots={true}
            //   pauseIconColor="white"
            //   pauseIconSize="40px"
            //   slideBackgroundColor="darkgrey"
            //   slideImageFit="cover"
            //   thumbnails={true}
            //   thumbnailWidth="100px"
            //   style={{
            //     textAlign: "center",
            //     maxWidth: "1600px",
            //     maxHeight: "500px",
            //     margin: "20px 0",
            //   }}
            // />
            <div className="col-4" key={i}>
             <img src={`https://image.tmdb.org/t/p/w500/${moviesRecomen.poster_path}`} className="img-fluid" alt="movieposter" />
            </div>
})}
          
          </div>
        </div>
      </div>
      </>
    );
  }
  
  export default RecomMovie;