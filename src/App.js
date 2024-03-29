import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faFaceSmile,
  faHeart as solidHeart,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";

library.add(faFaceSmile);

function App() {
  const [likes, setLikes] = useState(false);
  const [count, setCount] = useState(0);

  const handleLikes = () => {
    setLikes((a) => !a);
    setCount((b) => (likes ? (b = 0) : (b = +1)));
  };
  return (
    <div className="container">
      <Header count={count} />
      <BodyCard likes={likes} handleLikes={handleLikes} />
    </div>
  );
}

function Header({ count }) {
  return (
    <div className="text-center">
      <h1 className="display-3">Double Click To Like</h1>
      <h1 className="display-6">Like {count}</h1>
    </div>
  );
}

function BodyCard({ likes, handleLikes }) {
  return (
    <div className="card mx-auto" style={{ width: "18rem", height: "65vh" }}>
      <div class="row p-2">
        <div className="col-sm-auto">
          <FontAwesomeIcon icon={faFaceSmile} size="2x" />
        </div>
        <div className="col">
          <h5 className="card-title">Lost Lucky</h5>
        </div>
      </div>

      <img
        src="https://www.princeton.edu/sites/default/files/styles/1x_full_2x_half_crop/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=Bg2K7j7J"
        alt="dog"
        style={{ height: "100%", objectFit: "cover" }}
        onDoubleClick={() => handleLikes()}
      />
      <div class="row p-2">
        <div className="col-sm-auto">
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </div>
        <div className="col text-end">
          <FontAwesomeIcon
            onClick={() => handleLikes()}
            icon={likes ? solidHeart : regularHeart}
            size="2x"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
