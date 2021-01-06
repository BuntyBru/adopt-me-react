import React, { useState, lazy, Suspense } from "react";
import { render } from "react-dom";
//import Pet from "./Pet";
//import SearchParams from "./searchParams";
import { Link, Router } from "@reach/router";
//import Details from "./Details";
import ThemeContext from "./ThemeContext";
import NavBar from "./Navbar";

const Details = lazy(() => import("./Details"));
const SearchParams = lazy(() => import("./searchParams"));

const App = () => {
  const themeHook = useState("blue");
  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <NavBar />

        <Suspense fallback={<p>Loading.....</p>}>
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </Suspense>
      </div>
    </ThemeContext.Provider>
  );
};
render(<App />, document.getElementById("root"));
