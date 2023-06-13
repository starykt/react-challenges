import React, { useState } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./base.css";

export default function Counter() {
  const [girlCount, setGirlCount] = useState(0);
  const [boyCount, setBoyCount] = useState(0);

  const girlUser = {
    name: "Girl",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/4329/4329449.png",
    imageSize: 60,
  };

  const boyUser = {
    name: "Boy",
    imageUrl: "https://cdn-icons-png.flaticon.com/256/11107/11107584.png",
    imageSize: 60,
  };

  function incrementGirlCount() {
    setGirlCount(girlCount + 1);
  }

  function decrementGirlCount() {
    if (girlCount > 0) {
      setGirlCount(girlCount - 1);
    }
  }

  function incrementBoyCount() {
    setBoyCount(boyCount + 1);
  }

  function decrementBoyCount() {
    if (boyCount > 0) {
      setBoyCount(boyCount - 1);
    }
  }

  function resetCount() {
    setGirlCount(0);
    setBoyCount(0);
  }

  return (
    <div className="container">
      <div>
        <Link to="/" className="back-btn">
          Back
        </Link>
      </div>
      <div className="test-div">
        <div className="total">
          <p className="text">Total people: {girlCount + boyCount}</p>
        </div>

        <div className="div-col">
          <img
            className="avatar"
            src={girlUser.imageUrl}
            alt={"Photo of " + girlUser.name}
            style={{ width: girlUser.imageSize, height: girlUser.imageSize }}
          />
          <p>{girlUser.name}</p>
          <div className="button">
            <Button status="increment" onClick={incrementGirlCount} />
            <Button status="decrement" onClick={decrementGirlCount} />
          </div>
          <p className="text">Total girls: {girlCount}</p>
        </div>

        <div className="div-col">
          <img
            className="avatar"
            src={boyUser.imageUrl}
            alt={"Photo of " + boyUser.name}
            style={{ width: boyUser.imageSize, height: boyUser.imageSize }}
          />
          <p>{boyUser.name}</p>
          <div>
            <Button status="increment" onClick={incrementBoyCount} />
            <Button status="decrement" onClick={decrementBoyCount} />
          </div>
          <p className="text">Total boys: {boyCount}</p>
        </div>
      </div>
      <div className="reset">
        <button onClick={resetCount} className="reset-button">
          <span className="reset-text">Reset</span>
        </button>
      </div>
    </div>
  );
}
