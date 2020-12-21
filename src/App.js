import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  /*return React.createElement("div", { id: "something" }, [
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
  ]);*/

  return (
    <div>
      <h1>Adopt me !!!</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Pepper" animal="Dog" breed="Cockateil" />
      <Pet name="Doink" animal="Dog" breed="mix" />
    </div>
  );
};
render(React.createElement(App), document.getElementById("root"));
