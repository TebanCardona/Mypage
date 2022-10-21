import React from "react";
import technologies from "../img/technologies.png";
import "../css/home.css";
function Home() {
  return (
    <div className="content-home">
      <div className="content-text">
        <h2>Hi! 👋 I am Esteban Cardona</h2>
        <h3>
          I`m web deloveper junior and I have knowledge about: <br />
          JavaScript, React, Redux, NodeJS, Express, PostgresSQL, Sequealize
        </h3>
        <img
          src={technologies}
          className="technologies"
          alt="technologies I know"
        />
      </div>
    </div>
  );
}

export default Home;
