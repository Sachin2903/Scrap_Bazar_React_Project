import "./main.css";
import { Fragment } from "react";
import { useState, useEffect, useRef } from "react";
export function Main() {
  const count = useRef(1);
  const [metstring, setmetstring] = useState("");
  const string = "Plastic - Newspaper - Electronics - Many More ";
  useEffect(() => {
    const id = setTimeout(() => {
      setmetstring(string.slice(0, Math.floor(count.current % string.length)));
      if (count.current === string.length + 1) count.current = 1;
      count.current = count.current + 1;
    }, 200);

    return () => {
      clearTimeout(id);
    };
  }, [metstring]);

  return (
    <Fragment>
      <div id="section" className="section"  >
        <h2 id="h2">
          Schedule a Pickup <span> <a href="#schedule"> NOW !</a></span>
        </h2>
        <h1 id="h1">
          SELL YOUR <span>SCRAP</span> HERE !
        </h1>
        <p id="p">
          {metstring}
          <span className="metastr"> |</span>
        </p>

      </div>

    </Fragment>
  );
}
