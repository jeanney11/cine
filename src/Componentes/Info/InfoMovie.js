import React from "react";
import "../Info/infoMovie.css";

function InfoMovie() {
  return (
    <div className="bodyHome">
      <div className="top">
        <div className="columns">
          <div className="column is-full featured_wrapper p-0">
            <img
              src="https://raw.githubusercontent.com/brixiobodino/coffeholic/main/banner.jpg"
              className="featured"
            />
            <div className="title_wrapper">
              <span className="has-text-white">Trending Today</span>
              <h1 className="title is-1 has-text-white">
                The Untold Story of the great Lorem Ipsum
              </h1>
              <button className="buttonHome is-medium">Watch It Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoMovie;
