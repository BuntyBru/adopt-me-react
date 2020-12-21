import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", { id: "something" }, [
    React.createElement("h1", {}, "Adopt Me!!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Dog",
      breed: "Cockateil",
    }),
    React.createElement(Pet, {
      name: "Doink",
      animal: "Cat",
      breed: "mixed",
    }),
  ]);
};
render(React.createElement(App), document.getElementById("root"));
