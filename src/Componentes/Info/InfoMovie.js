import React from "react";
import "../Info/infoMovie.css";

function InfoMovie() {
  return (
    <div className="bodyHome">
      <div class="top">
        <div class="columns">
          <div class="column is-full featured_wrapper p-0">
            <img
              src="https://raw.githubusercontent.com/brixiobodino/coffeholic/main/banner.jpg"
              class="featured"
            />
            <div class="title_wrapper">
              <span class="has-text-white">Trending Today</span>
              <h1 class="title is-1 has-text-white">
                The Untold Story of the great Lorem Ipsum
              </h1>
              <button class="buttonHome is-medium">Watch It Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoMovie;
