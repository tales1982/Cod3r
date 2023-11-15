import React from "react";
import Primeiro from "./components/basico/Primeiro";
import ComParametro from "./components/basico/ComParametro";
import Fragmento from "./components/basico/Fragmento";
import Aleatorio from "./Aleatorio";

const App = () => {
  return (
    <div id="app">
      <h1>Fundamentos React</h1>
      <Aleatorio min={10} max={25}/>
      <Fragmento />
      <ComParametro titulo="Situacao do aluno" subtitulo="Tales" nota="9.8" />
      <Primeiro />
    </div>
  );
};

export default App;
