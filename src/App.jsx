import "./App.css";
import { Button } from "./components/button";
import { useState } from "react";

function App() {

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const [estado, setEstado] = useState("Pato");

  return (
    <>
      <div>
        <h1>
          {estado}
        </h1>

        <button onClick={()=>{

          if (estado == "Pato") {
            setEstado("Ganso")
          } else {
            setEstado("Pato")
          }

        }}>
          Cambiar Estado
        </button>

        <button onClick={()=>{
          alert("Hola mundo");
        }}>
          Alerta
        </button>

        <button onClick={() => openInNewTab('https://artebymm.com')}>
          Visita artebymm.com
        </button>
  
      </div>
    </>
  );
} 

export default App;
