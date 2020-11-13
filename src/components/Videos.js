import React, { Component } from "react";
import "./videos.css";

class Videos extends Component {
  render() {
    return (
      <div className="videos">
        <ul id="videoList">
          <li>
            <span role="img">🔎</span>
            <iframe
              width="560"
              height="315"
              title="video1"
              src="https://www.youtube.com/embed/4Q5b2r_sRX0"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </li>

          <li>
            <span role="img">🔎</span>
            <iframe
              width="560"
              height="315"
              title="video2"
              src="https://www.youtube.com/embed/BYgMhIzRx-4"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </li>
        </ul>

        <p id="disclamer">
          <b>
            SOME VIDEOS ON THIS PAGE ARE NOT OWNED BY THIS PAGE. THIS PAGE DOES NOT GET ANY MONITARY GAINS FROM ANY
            VIDEOS HOSTED.
          </b>
        </p>
      </div>
    );
  }
}
export default Videos;
