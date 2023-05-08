import "./main.css";
import { Fragment } from "react";
import { useState, useEffect } from "react";
export function Main() {
  const [metstring, setmetstring] = useState("");
  useEffect(() => {});
  return (
    <Fragment>
      <div id="section" className="section">
        <h1>
          SELL YOUR <span>SCRAP</span> HERE !
        </h1>
        <p>Plastic - Newspaper - Electronics - Many More</p>
        <h2>
          Schedule a Pickup <span>NOW !</span>
        </h2>
      </div>
      <div id="ss"></div>
    </Fragment>
  );
}
