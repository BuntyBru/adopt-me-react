import React, { useState } from "react";
import { render } from "react-dom";
//import Pet from "./Pet";
import SearchParams from "./searchParams";
import { Link, Router } from "@reach/router";
import Details from "./Details";
import ThemeContext from "./ThemeContext";
import NavBar from "./Navbar";

const App = () => {
  const themeHook = useState("blue");
  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <NavBar />

        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};
render(<App />, document.getElementById("root"));
