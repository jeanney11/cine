import React from "react";
import "../Info/infoMovie.css";

function InfoMovie() {
  return (
    <div className="bodyHome">
      <div className="top">
        <div className="columns">
          <div className="column is-full featured_wrapper p-0">
          <iframe width="1200" height="400" marginLeft="20" src="https://www.youtube.com/embed/gUtKhMLE2BM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            {/* <div className="title_wrapper">
              <span className="has-text-white">Trending Today</span>
              
              <button className="buttonHome is-medium">Watch It Now</button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoMovie;
