import React from "react";
import "./App.css";
import Movies from "./container/movies";

function App() {
  return (
    <div className="App">
      <header>Header</header>
      <section>
        <Movies />
      </section>
    </div>
  );
}

export default App;
