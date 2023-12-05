import { useEffect, useState } from "react";
import Continent from "./Continent";
import Style from "./styles/style.css";
import Video from "./styles/images/video.mp4";

function FlagApp() {
  let [showContinent, setShowContinent] = useState(false);
  let [continent, setContinent] = useState([]);

  return (
    <>
      <video className="videoTag" autoPlay loop muted>
        <source src={Video} type="video/mp4" />
      </video>
      <div className="App">
        <h1 className="mint">Country Flag Practice Application</h1>
        <label>Select a continent:</label>
        <select onChange={(e) => setContinent(e.target.value)}>
          <option value="asia">Asia</option>
          <option value="africa">Africa</option>
          <option value="europe">Europe</option>
        </select>
        <button
          onClick={() => {
            setShowContinent(!showContinent);
          }}
        >
          {showContinent ? "Reset" : "Show continent"}
        </button>

        {showContinent && <Continent continent={continent} />}
      </div>
    </>
  );
}

export default FlagApp;
