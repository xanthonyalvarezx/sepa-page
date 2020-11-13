import React, { Component } from "react";

import SEPA from "../Images/sepalogo.png";
import MountainBike from "../Images/mountainbikeonrocks.jpg";

import "./Main.css";

class mainPage extends Component {
  render() {
    return (
      <div>
        <header id="header">
          <img id="hero" src={SEPA} alt="SEPA Mountain Biking logo" />
        </header>
        <main>
          <br />

          <img id="paragraphPhoto" src={MountainBike} alt="Mountain bike on a rocky overlook in the woods" />

          <p>
            SEPA Mountain Biking is your one stop shop for everything south-eastern Pennsylvania has to offer for your
            mountain biking journey. <br />
            <img id="paragraphPhoto" src={MountainBike} alt="Mountain bike on a rocky overlook in the woods" />
            We show you the bast spots to ride. Articles on how to maintain your bike and we'll soon have a virtual swap
            meet built right in to the site.
            <br />
            So don't forget to sign up for our monthly newsletter on the subscription page. Also check out some videos
            of riders hitting spots near you on the videos page.
            <br />
            Let's all get ou there... <b>RIDE HARD AND RIDE FAST FRIENDS</b>
          </p>
        </main>
      </div>
    );
  }
}

export default mainPage;
