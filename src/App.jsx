import "./App.css";
import { Button } from "./components/button";
import { useState } from "react";

function App() {

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
        
        <Button texto={"Compras"}></Button>
      </div>
    </>
  );
} 

export default App;
