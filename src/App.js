import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import Welcome from "./components/WelcomePage";
import WelcomePage from "./components/WelcomePage";
import { Route } from "react-router-dom";

export default function App() {

  return (
    <main>
      <Header />
      <Route exact path="/">
        <WelcomePage />
      </Route>
      <Route path="/characters">
        <CharacterList />
      </Route>
    </main>
  );
}
