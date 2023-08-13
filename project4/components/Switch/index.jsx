import React, { useState } from "react";
import { HashRouter, Route, Link } from "react-router-dom";
import "./styles.css";
import States from "../States";
import Example from "../Example";

function Button() {
  const [status, setStatus] = useState(1);
  return (
    <div>
      <HashRouter>
        <Link to={status ? "/states" : "/example"}>
          <button
            className="button"
            type="button"
            onClick={() => setStatus(!status)}
          >
            Switch to {status ? "States" : "Example"}
          </button>
        </Link>
        <Route path="/states" component={States} />
        <Route path="/example" component={Example} />
      </HashRouter>
    </div>
  );
}

export default Button;
