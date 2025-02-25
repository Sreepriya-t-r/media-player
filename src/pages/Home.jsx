import React, { useState } from "react";
import Add from "../components/Add";
import { Link } from "react-router-dom";
import Allvideos from "../components/Allvideos";
import AllCategories from "../components/AllCategories";

const Home = () => {
  const [videoResponse, setVideoResponse] = useState("");
  const [videoDeleteResponse, setVideoDeleteResponse] = useState("");
  const [catVdoDeleteResponse, setCatDeleteResponse] = useState("");

  return (
    <div className="container">
      <div className="d-flex  justify-content-between py-5">
        <div>
          <Add setVideoResp={setVideoResponse} />
        </div>
        <div>
          <Link to="/history">watch history</Link>
        </div>
      </div>
      <div className="row ">
        <div className="col-6">
          <Allvideos
            videResp={videoResponse}
            videoDeleteResponse={videoDeleteResponse}
            setCatDeleteResponse={setCatDeleteResponse}
          />
        </div>
        <div className="col-6">
          <AllCategories
            setVideoDeleteResponse={setVideoDeleteResponse}
            catVdoDeleteResponse={catVdoDeleteResponse}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
