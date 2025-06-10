import React from "react";
import "./style.css";

const Notfound = () => {
  return (
    <div>
      <div id="main">
        <div className="fof"> {/* Changed class to className */}
          <h1>404 Not Found</h1> <br />
          <h1>Something went wrong</h1>
        </div>
      </div>
    </div>
  );
};

export default Notfound;
