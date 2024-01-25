import "./App.css";
import Media from "./components/Media";
import Soma from "./components/Soma";
import Sortea from "./components/Sortea";
import Intervalo from "./components/Intervalo";

function App() {
  return (
    <>
      <div className="App">
        <h1>Exercicio React-Redux (Simples)</h1>
        <div className="linha">
          <Intervalo></Intervalo>
        </div>
        <div className="linha">
          <Media></Media>
          <Soma></Soma>
          <Sortea></Sortea>
        </div>
      </div>
    </>
  );
}

export default App;
